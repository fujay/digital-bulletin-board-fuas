import DateTime from "@/components/DateTime";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-fuas.png";
import { scrapeScreenshot } from "@/components/WebsiteScraper";
import { openAIScraper } from "@/components/OpenAIScraper";
import Weather from "@/components/Weather";
import ProgressBar from "@/components/UI/ProgressBar";
import { readConfig, readKeyConfig } from "@/lib/useConfig";

export default async function Home() {
  const config = await readConfig();

  const dateConfig = config[Date.name.toLowerCase()] ?? {
    date: "Clock",
  };

  // scrapeViaPuppeteer(
  //   "https://www.frankfurt-university.de/de/studium/studienorganisation/semestertermine/",
  //   "#c18317 > h2",
  //   [
  //     "#c18317 > table > tbody > tr:nth-child(1) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(1) > td:nth-child(2) > p",
  //     "#c18317 > table > tbody > tr:nth-child(2) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(2) > td:nth-child(2) > p",
  //     "#c18317 > table > tbody > tr:nth-child(3) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(3) > td:nth-child(2) > p",
  //     "#c18317 > table > tbody > tr:nth-child(4) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(4) > td:nth-child(2) > p",
  //     "#c18317 > table > tbody > tr:nth-child(5) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(5) > td:nth-child(2)",
  //     "#c18317 > table > tbody > tr:nth-child(6) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(6) > td:nth-child(2)",
  //     "#c18317 > table > tbody > tr:nth-child(7) > td:nth-child(1) > p",
  //     "#c18317 > table > tbody > tr:nth-child(7) > td:nth-child(2) > p",
  //   ]
  // );
  // scrapeScreenshot(
  //   "https://www.frankfurt-university.de/de/studium/studienorganisation/semestertermine/",
  //   "#c18317 > h2",
  //   "#c18317 > table"
  // );
  // openAIScraper("https://www.example.com/");

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen p-4 overflow-hidden">
      <section className="justify-self-start">
        <Link href={"/dashboard"}>
          <Image src={logo} alt="FUAS logo" priority />
        </Link>
      </section>
      <section className="justify-self-center"></section>
      <section className="justify-self-end">
        <DateTime config={dateConfig} />
      </section>
      <main className="col-span-3 content-center">
        <Weather />
      </main>
      <footer className="col-span-3 row-start-4">
        <ProgressBar />
      </footer>
    </div>
  );
}
