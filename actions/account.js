"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeDecimal = (obj) => {
  const serialized = { ...obj };
  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }
  return serialized;
};

export async function getAccountWithTransactions(accountId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const account = await db.account.findUnique({
    where: {
      id: accountId,
      userId: user.id,
    },
    include: {
      transactions: {
        orderBy: { date: "desc" },
      },
      _count: {
        select: { transactions: true },
      },
    },
  });

  if (!account) return null;

  return {
    ...serializeDecimal(account),
    transactions: account.transactions.map(serializeDecimal),
  };
}

export async function bulkDeleteTransactions(transactionIds) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // Validate input
    if (!Array.isArray(transactionIds) || transactionIds.length === 0) {
      return { success: false, error: "No transactions selected" };
    }

    // Get transactions to calculate balance changes
    const transactions = await db.transaction.findMany({
      where: {
        id: { in: transactionIds },
        userId: user.id,
      },
    });

    // Validate that all requested transactions were found and belong to user
    if (transactions.length === 0) {
      return { success: false, error: "No valid transactions found to delete" };
    }

    if (transactions.length !== transactionIds.length) {
      // Some transactions weren't found or don't belong to user
      const foundIds = transactions.map((t) => t.id);
      const missingIds = transactionIds.filter((id) => !foundIds.includes(id));
      console.warn(
        `Some transactions not found or unauthorized: ${missingIds.join(", ")}`
      );
    }

    // Group transactions by account to update balances
    const accountBalanceChanges = transactions.reduce((acc, transaction) => {
      const change =
        transaction.type === "EXPENSE"
          ? transaction.amount
          : -transaction.amount;
      acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
      return acc;
    }, {});

    // Delete transactions and update account balances in a transaction
    await db.$transaction(async (tx) => {
      // Delete only the transactions we found (for safety)
      const transactionIdsToDelete = transactions.map((t) => t.id);
      
      await tx.transaction.deleteMany({
        where: {
          id: { in: transactionIdsToDelete },
          userId: user.id,
        },
      });

      // Update account balances
      for (const [accountId, balanceChange] of Object.entries(
        accountBalanceChanges
      )) {
        await tx.account.update({
          where: { id: accountId },
          data: {
            balance: {
              increment: balanceChange,
            },
          },
        });
      }
    });

    revalidatePath("/dashboard");
    const affectedAccountIds = [
      ...new Set(transactions.map((t) => t.accountId).filter(Boolean)),
    ];
    for (const id of affectedAccountIds) {
      revalidatePath(`/account/${id}`);
    }

    return { 
      success: true, 
      deletedCount: transactions.length,
      requestedCount: transactionIds.length 
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Check if account exists and belongs to user
    const account = await db.account.findUnique({
      where: {
        id: accountId,
        userId: user.id,
      },
      include: {
        _count: {
          select: { transactions: true },
        },
      },
    });

    if (!account) {
      return { success: false, error: "Account not found" };
    }

    // Prevent deleting the last/default account
    const allAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    if (allAccounts.length === 1) {
      return {
        success: false,
        error: "Cannot delete your last account. Please create another account first.",
      };
    }

    // If this is the default account, set another account as default
    if (account.isDefault) {
      const otherAccount = await db.account.findFirst({
        where: {
          userId: user.id,
          id: { not: accountId },
        },
      });

      if (otherAccount) {
        await db.account.update({
          where: { id: otherAccount.id },
          data: { isDefault: true },
        });
      }
    }

    // Delete the account (transactions will be automatically deleted due to cascade)
    await db.account.delete({
      where: {
        id: accountId,
        userId: user.id,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath(`/account/${accountId}`);

    return {
      success: true,
      deletedTransactionsCount: account._count.transactions,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateDefaultAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // First, unset any existing default account
    await db.account.updateMany({
      where: {
        userId: user.id,
        isDefault: true,
      },
      data: { isDefault: false },
    });

    // Then set the new default account
    const account = await db.account.update({
      where: {
        id: accountId,
        userId: user.id,
      },
      data: { isDefault: true },
    });

    revalidatePath("/dashboard");
    return { success: true, data: serializeDecimal(account) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
