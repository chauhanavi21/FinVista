import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { TransactionTable } from "../_components/transaction-table";
import { notFound, redirect } from "next/navigation";
import { AccountChart } from "../_components/account-chart";
import { DeleteAccountButton } from "../_components/delete-account-button";

export default async function AccountPage({ params }) {
  const { id } = await params;
  const accountData = await getAccountWithTransactions(id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-5">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-end sm:justify-between">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight gradient-title capitalize break-words">
            {account.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-4">
          <div className="text-left sm:text-right">
            <div className="text-2xl sm:text-xl lg:text-2xl font-bold">
              ${parseFloat(account.balance).toFixed(2)}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {account._count.transactions} Transaction{account._count.transactions !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="self-start sm:self-end">
            <DeleteAccountButton accountId={id} accountName={account.name} />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <AccountChart transactions={transactions} />
      </Suspense>

      {/* Transactions Table */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
}
