"use client";

import { deleteScraper, saveScraper } from "@/app/actions/scraperActions";
import { AlertDialogConfirmation } from "@/components/UI/AlertDialogConfirmation";
import { InputLabel } from "@/components/UI/InputLabel";
import { Button } from "@/components/UI/button";
import { Form } from "@/components/UI/form";
import { Scraper, ScraperSchema } from "@/schemas/Scrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCcw, Save, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type ScraperFormProps = {
  scraper: Scraper;
  index: number;
};

export default function ScraperForm({ scraper, index }: ScraperFormProps) {
  const [message, setMessage] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [error, setError] = useState({});
  const router = useRouter();

  const form = useForm<Scraper>({
    mode: "onBlur",
    resolver: zodResolver(ScraperSchema),
    defaultValues: { ...scraper },
  });

  useEffect(() => {
    localStorage.setItem("formModified", form.formState.isDirty.toString());
  }, [form.formState.isDirty]);

  async function onSubmit() {
    setMessage("");
    setError({});
    const result = await saveScraper(form.getValues(), index);
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
    await deleteScraper(index);
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
            <InputLabel type="url" fieldTitle="URL" nameInSchema="url" />
            <InputLabel
              fieldTitle="TitleSelector"
              nameInSchema="titleSelector"
            />
            <InputLabel fieldTitle="Selector" nameInSchema="selector" />
            <InputLabel fieldTitle="Scraper" nameInSchema="scraper" />
            <InputLabel fieldTitle="Format" nameInSchema="format" />
            <InputLabel fieldTitle="Width" nameInSchema="width" />
            <InputLabel fieldTitle="Height" nameInSchema="height" />
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
