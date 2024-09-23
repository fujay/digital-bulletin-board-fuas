import prisma from "./db";

export async function getBulletins() {
  const bulletins = await prisma.bulletin.findMany();
  return bulletins;
}
