import { z } from "zod";

export const BulletinSchema = z.object({
  id: z.string(),
  title: z.string().min(2),
  content: z.string().min(2),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Bulletin = z.infer<typeof BulletinSchema>;
