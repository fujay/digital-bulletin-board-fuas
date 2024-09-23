"use client";

import { onScraperSaveAction } from "@/app/actions/actions";
import { useNotificationContext } from "@/store/notification-context";
import {
  HiOutlineDocumentText,
  HiOutlineHashtag,
  HiOutlineLink,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import { IoIosSave } from "react-icons/io";
import { RxHeight, RxWidth } from "react-icons/rx";
import Form from "./UI/ConfigForm";
import IconButton from "./UI/IconButton";
import Input from "./UI/FormInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";

type ScraperConfig = {
  url: string;
  titleSelector: string;
  selector: string;
  scraper: "Puppeteer" | "Cheerio";
  format: "Text" | "Screenshot";
  width: number;
  height: number;
  qrcode: string;
};

type ScraperConfigProps = {
  props: ScraperConfig;
};

export default function Scraperonfig({ props }: ScraperConfigProps) {
  const { showNotification, notification } = useNotificationContext();
  // const [error, action, isPending] = useActionState(saveConfig, null);

  console.log(props);

  return (
    <>
      <Form onSaveAction={onScraperSaveAction}>
        <Input
          defaultValue={props.url}
          label="URL of the website to scrape:"
          id="url"
          icon={HiOutlineLink}
          type="url"
          placeholder="https://www.frankfurt-university.de/"
          title="The URL of the website to scrape"
          aria-label="The URL of the website to scrape"
          tooltip="The URL of the website to scrape, e.g. https://www.frankfurt-university.de/"
          required
        />
        <Input
          defaultValue={props.titleSelector}
          label="Selector or own text for the title element on the website:"
          id="titleSelector"
          icon={HiOutlineDocumentText}
          type="text"
          placeholder="#c18317 > h2 or Semestertermine"
          title="The selector for the title element on the website, e.g. #c18317 > h2."
          aria-label="The selector for the title element on the website, e.g. #c18317 > h2."
          tooltip="The selector for the title element on the website, e.g. #c18317 > h2."
          required
        />
        <Input
          defaultValue={props.selector}
          label="Selectors for the data elements to scrape:"
          id="selector"
          icon={HiOutlineHashtag}
          type="text"
          placeholder="Seconds interval"
          title="Seconds interval for bulletin (1-300) changes the time between each bulletin"
          aria-label="Seconds interval for bulletin (1-300)"
          tooltip="Seconds interval for bulletin (1-300) changes the time between each bulletin"
          required
        />
        <Input
          defaultChecked={props.qrcode === "on"}
          label="QR Code"
          id="qrcode"
          type="checkbox"
          className="min-w-min"
          title="Activate to show the QR code for the website url"
          aria-label="Activate to show the QR code for the website url"
        />
        <div>
          <label htmlFor="scraper">Scraper tool for parsing HTML:</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger type="button" className="ml-2">
                <HiOutlineQuestionMarkCircle />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  -<b>Cheerio</b> is fast, flexible, and elegant library for
                  parsing and manipulating HTML and XML.
                </p>
                <p>
                  -<b>Puppeteer</b> is a JavaScript library which provides a
                  high-level API to control Chrome. Puppeteer runs headless (no
                  visible UI).
                  <p>
                    <b>Only Puppeteer works with screenshots!</b>
                  </p>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div>
            <select
              // defaultValue={db}
              id="scraper"
              name="scraper"
              className="rounded mt-3 border border-fuas-secondary text-fuas-primary focus:border-fuas-primary focus:outline-none"
            >
              <option>Puppeteer</option>
              <option>Cheerio</option>
            </select>
          </div>
        </div>
        <fieldset className="border-2 p-2 border-fuas-secondary">
          <legend>Scrape result format:</legend>
          <div className="flex justify-around">
            <Input
              defaultValue="Text"
              defaultChecked={props.format === "Text" ? true : false}
              className="min-w-min"
              label="Text"
              type="radio"
              id="text"
              name="format"
              // value="email"
            />

            <Input
              defaultValue="Screenshot"
              defaultChecked={props.format === "Screenshot" ? true : false}
              className="min-w-min"
              label="Screenshot"
              type="radio"
              id="screenshot"
              name="format"
              // value="phone"
            />
          </div>
        </fieldset>
        <datalist id="defaultWidths">
          <option value="800"></option>
          <option value="1024"></option>
          <option value="1280"></option>
          <option value="1600"></option>
          <option value="1920"></option>
        </datalist>
        <datalist id="defaultHeights">
          <option value="600"></option>
          <option value="768"></option>
          <option value="800"></option>
          <option value="900"></option>
          <option value="1080"></option>
        </datalist>
        <Input
          defaultValue={props.width}
          label="(Optional) Page width in pixels (800-2000):"
          id="width"
          icon={RxWidth}
          type="number"
          min={800}
          max={2000}
          list="defaultWidths"
          placeholder="1920"
          title="The page width in CSS pixels."
          aria-label="The page width in CSS pixels."
          tooltip="The page width in CSS pixels."
        />
        <Input
          defaultValue={props.height}
          label="(Optional) Page height in pixels (600-2000):"
          id="height"
          icon={RxHeight}
          type="number"
          min={600}
          max={2000}
          list="defaultHeights"
          placeholder="1080"
          title="The page height in CSS pixels."
          aria-label="The page height in CSS pixels."
          tooltip="The page height in CSS pixels."
        />
        <IconButton
          type="submit"
          icon={() => <IoIosSave />}
          onClick={() =>
            showNotification({
              title: "Location saved",
              message: "Weather location has been saved",
              status: "success",
            })
          }
        >
          Save
        </IconButton>
      </Form>
      {/* {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )} */}
    </>
  );
}
