"use client";

import { useEffect } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteAccount } from "@/actions/account";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

export function DeleteAccountButton({ accountId, accountName }) {
  const router = useRouter();

  const {
    loading: deleteLoading,
    fn: deleteFn,
    data: deleted,
    error,
  } = useFetch(deleteAccount);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you absolutely sure you want to delete the account "${accountName}"?\n\nThis action cannot be undone. This will permanently delete the account and all of its transactions (if any). This will affect your financial records and cannot be recovered.`
    );

    if (!confirmed) return;

    await deleteFn(accountId);
  };

  useEffect(() => {
    if (deleted?.success && !deleteLoading) {
      const transactionCount = deleted.deletedTransactionsCount || 0;
      const message =
        transactionCount > 0
          ? `Account "${accountName}" and ${transactionCount} transaction${transactionCount > 1 ? "s" : ""} have been deleted successfully`
          : `Account "${accountName}" has been deleted successfully`;
      toast.success(message);
      router.push("/dashboard");
      router.refresh();
    }
  }, [deleted, deleteLoading, accountName, router]);

  useEffect(() => {
    if (error && !deleteLoading) {
      toast.error(error.message || "Failed to delete account");
    }
  }, [error, deleteLoading]);

  return (
    <Button
      variant="destructive"
      size="sm"
      className="mb-0 sm:mb-2"
      onClick={handleDelete}
      disabled={deleteLoading}
    >
      <Trash className="h-4 w-4 sm:mr-2" />
      <span className="hidden sm:inline">
        {deleteLoading ? "Deleting..." : "Delete Account"}
      </span>
      <span className="sm:hidden">
        {deleteLoading ? "..." : "Delete"}
      </span>
    </Button>
  );
}

