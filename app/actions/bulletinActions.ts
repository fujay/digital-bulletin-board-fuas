"use server";

import prisma from "@/lib/db";
import { Bulletin, BulletinSchema } from "@/schemas/Bulletins";

type ReturnType = {
  message: string;
  error?: Record<string, string[]>;
};

export async function saveBulletin(bulletin: Bulletin): Promise<ReturnType> {
  const parse = BulletinSchema.safeParse(bulletin);

  if (!parse.success) {
    return {
      message: "Save failed",
      error: parse.error.flatten().fieldErrors,
    };
  }

  await prisma.bulletin.update({
    where: { id: bulletin.id },
    data: bulletin,
  });

  return { message: "Bulletin Saved!" };
}

export async function deleteBulletin(id: string): Promise<ReturnType> {
  await prisma.bulletin.delete({ where: { id } });

  return { message: "Bulletin Deleted!" };
}
