import { z } from "zod";

export const ScraperSchema = z.object({
  url: z.string().url(),
  titleSelector: z.string().min(2),
  selector: z.string().min(1),
  scraper: z.enum(["Puppeteer", "Cheerio"]),
  format: z.enum(["Text", "Screenshot"]),
  width: z.number().int().positive().min(800).optional(),
  height: z.number().int().positive().min(600).optional(),
});

export type Scraper = z.infer<typeof ScraperSchema>;
