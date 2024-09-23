import prisma from "./db";

export async function getBulletin(id: string) {
  const bulletin = await prisma.bulletin.findUnique({
    where: { id: id },
  });
  return bulletin;
}
