"use server";

import { readConfig, readKeyConfig, saveConfig } from "@/lib/useConfig";
import { Scraper, ScraperSchema } from "@/schemas/Scrapper";

type ReturnType = {
  message: string;
  error?: Record<string, string[]>;
};

export async function saveScraper(
  scraper: Scraper,
  index: number
): Promise<ReturnType> {
  const parse = ScraperSchema.safeParse(scraper);

  if (!parse.success) {
    return {
      message: "Save failed",
      error: parse.error.flatten().fieldErrors,
    };
  }

  saveConfig(scraper, "scraper", index);

  return { message: "Scraper Saved!" };
}

export async function deleteScraper(index: number) {
  const scraperList = (await readKeyConfig("scraper")) as Scraper[];
  scraperList.splice(index, 1);

  saveConfig(scraperList, "scraper");
  return { message: "Scraper Deleted!" };
}
