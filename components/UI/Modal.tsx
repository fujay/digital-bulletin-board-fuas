"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/UI/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertDialogConfirmation } from "./AlertDialogConfirmation";

export function Modal({ children }: { children: React.ReactNode }) {
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  const handleOpenChange = () => {
    const isFormModified = localStorage.getItem("formModified");
    if (isFormModified && JSON.parse(isFormModified)) {
      setShowExitConfirmation(true);
    } else {
      router.back();
    }
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">
          <AlertDialogConfirmation
            open={showExitConfirmation}
            setOpen={setShowExitConfirmation}
            confirmationAction={closeModal}
            message="You have unsaved changes. Please confirm you want to exit without saving."
          />
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
