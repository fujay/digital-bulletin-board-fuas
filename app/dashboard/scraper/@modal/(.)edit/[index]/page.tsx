import ScraperForm from "@/app/dashboard/scraper/edit/[index]/ScraperForm";
import { Modal } from "@/components/UI/Modal";
import { readKeyConfig } from "@/lib/useConfig";
import { Scraper } from "@/schemas/Scrapper";

type EditScraperProps = {
  params: {
    index: number;
  };
};

export default async function EditScraper({ params }: EditScraperProps) {
  const { index } = params;

  const scraperList = (await readKeyConfig("scraper")) as Scraper[];
  const scraper = scraperList[index];

  if (!scraper) {
    return (
      <div className="p-8 max-w-md space-y-2">
        <h1 className="text-2xl">No Scraper found with Index {index}.</h1>
      </div>
    );
  }

  return (
    <Modal>
      <div className="p-8 max-w-md space-y-2">
        <h1 className="text-2xl">Edit Scraper {index}</h1>
        <ScraperForm scraper={scraper} index={index} />
      </div>
    </Modal>
  );
}
