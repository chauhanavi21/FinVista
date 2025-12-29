"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteAccount } from "@/actions/account";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

export function DeleteAccountButton({ accountId, accountName }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    loading: deleteLoading,
    fn: deleteFn,
    data: deleted,
    error,
  } = useFetch(deleteAccount);

  const handleDelete = async () => {
    await deleteFn(accountId);
  };

  // Handle successful deletion
  if (deleted?.success && !deleteLoading) {
    toast.success(
      `Account "${accountName}" and all its transactions have been deleted successfully`
    );
    router.push("/dashboard");
    router.refresh();
  }

  // Handle errors
  if (error && !deleteLoading) {
    toast.error(error.message || "Failed to delete account");
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" className="mb-2">
          <Trash className="h-4 w-4 mr-2" />
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            account <strong>&quot;{accountName}&quot;</strong> and{" "}
            <strong>all of its transactions</strong>. This will affect your
            financial records and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleteLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {deleteLoading ? "Deleting..." : "Delete Account"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

