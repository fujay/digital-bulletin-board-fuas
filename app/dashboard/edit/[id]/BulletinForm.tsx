"use client";

import { deleteBulletin, saveBulletin } from "@/app/actions/bulletinActions";
import { AlertDialogConfirmation } from "@/components/UI/AlertDialogConfirmation";
import { InputLabel } from "@/components/UI/InputLabel";
import { Button } from "@/components/UI/button";
import { Form } from "@/components/UI/form";
import { Bulletin, BulletinSchema } from "@/schemas/Bulletins";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCcw, Save, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type BulletinFormProps = {
  bulletin: Bulletin;
};

export default function BulletinForm({ bulletin }: BulletinFormProps) {
  const [message, setMessage] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [error, setError] = useState({});
  const router = useRouter();

  const form = useForm<Bulletin>({
    mode: "onBlur",
    resolver: zodResolver(BulletinSchema),
    defaultValues: { ...bulletin },
  });

  useEffect(() => {
    localStorage.setItem("formModified", form.formState.isDirty.toString());
  }, [form.formState.isDirty]);

  async function onSubmit() {
    setMessage("");
    setError({});
    const result = await saveBulletin(form.getValues());
    if (result?.error) {
      toast.error(result.message);
      setMessage(result.message);
      setError(result.error);
      return;
    } else {
      toast.success(result.message);
      setMessage(result.message);
      router.refresh();
      form.reset(form.getValues());
    }
  }

  function deleteHandler() {
    setDeleteDialog(true);
  }

  const handleDeleteBulletin = async () => {
    await deleteBulletin(bulletin.id);
    router.refresh();
  };

  return (
    <>
      <Toaster />
      <div>
        {message ? <h2 className="text-2xl">{message}</h2> : null}

        {error ? (
          <div className="mb-10 text-red-500">
            {Object.keys(error).map((key) => (
              <p key={key}>{`${key}: ${error[key as keyof typeof error]}`}</p>
            ))}
          </div>
        ) : null}

        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit(onSubmit)();
            }}
            className="flex flex-col gap-4"
          >
            <InputLabel fieldTitle="Title" nameInSchema="title" />
            <InputLabel fieldTitle="Content" nameInSchema="content" />
            <div className="flex gap-4 justify-between">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => form.reset()}
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Reset
              </Button>
              <Button
                onClick={deleteHandler}
                type="button"
                variant="destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </form>
        </Form>
        <AlertDialogConfirmation
          open={deleteDialog}
          setOpen={() => router.back()}
          confirmationAction={handleDeleteBulletin}
          message="Are you sure you want to delete this bulletin?"
        />
      </div>
    </>
  );
}
