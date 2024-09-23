import Heading from "@/components/UI/Heading";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { readKeyConfig } from "@/lib/useConfig";
import { type Scraper } from "@/schemas/Scrapper";
import { Wrench } from "lucide-react";
import ScraperRow from "./ScraperRow";

export default async function Scraper() {
  const scraperList: Scraper[] =
    (await readKeyConfig(Scraper.name.toLowerCase())) || {};

  return (
    <>
      <Heading />
      <h3 className="flex text-fuas-primary items-center gap-1.5 font-medium">
        <Wrench /> Scraper List
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>URL</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Selector</TableHead>
            <TableHead>Format</TableHead>
            <TableHead>Scraper</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scraperList.map((scraper, index) => (
            <ScraperRow key={index} index={index} scraper={scraper} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
