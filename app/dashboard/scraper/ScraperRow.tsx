"use client";

import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "@/components/UI/table";
import { Scraper } from "@/schemas/Scrapper";

type ScraperRowProps = {
  scraper: Scraper;
  index: number;
};

export default function ScraperRow({ scraper, index }: ScraperRowProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/scraper/edit/${index}`);
  };

  return (
    <TableRow onClick={handleClick}>
      <TableCell>{scraper.url}</TableCell>
      <TableCell>{scraper.titleSelector}</TableCell>
      <TableCell>{scraper.selector}</TableCell>
      <TableCell>{scraper.format}</TableCell>
      <TableCell>{scraper.scraper}</TableCell>
    </TableRow>
  );
}
