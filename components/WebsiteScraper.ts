import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

/**
 *
 * @param url - The URL of the website to scrape via algbook.
 * @returns data json object containing the scraped website.
 */
export async function scrapeViaService(url: string) {
  const response = await fetch(`https://media.algobook.info/scrape?url=${url}`);

  const content = await response.json();

  return content.data;
}

/**
 * Scrapes data from a website using specified selectors.
 *
 * @param url - The URL of the website to scrape.
 * @param title - The selector for the title element.
 * @param selectors - An array of selectors for the data elements to scrape.
 * @returns An object containing the scraped header and data.
 */
export async function scraperSelectors(
  url: string,
  title: string,
  selectors: string[]
) {
  const response = await fetch(url);

  const text = await response.text();

  const $ = cheerio.load(text);

  const scrappedData: string[] = [];

  const header = $(title).text().trim();

  selectors.forEach((selector) => {
    const data = $(selector).text().trim();
    scrappedData.push(data);
  });

  return {
    header,
    data: scrappedData,
  };
}

/**
 * Scrapes a website and extracts data based on provided selectors.
 *
 * @param url - The URL of the website to scrape.
 * @param titleSelector - The selector for the title element on the website.
 * @param selectors - An array of selectors for the data elements on the website.
 * @returns An object containing the scraped title and data.
 */
export async function scrapeWebsite(
  url: string,
  titleSelector: string,
  selectors: string[]
) {
  let browser;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
      width: 1080,
      height: 768,
    });

    await page.goto(url);

    const data = await page.evaluate(
      (titleSelector, selectors) => {
        const title = document
          .querySelector(titleSelector)
          ?.textContent?.trim();

        // const data = Array.from(
        //   document.querySelectorAll(
        //     "#c18317 > table > tbody > tr > td"
        //   ) as NodeListOf<HTMLElement>
        // ).map((el) => el.textContent?.trim());
        // return { title, data };

        const data = selectors.map((selector) => {
          return document.querySelector(selector)?.textContent?.trim();
        });
        return { title, data };
      },
      titleSelector,
      selectors
    );
    console.log(data);

    //

    // const scrappedData: string[] = [];

    // const header = await page.$eval(titleSelector, (el) =>
    //   el.textContent?.trim()
    // );
    // console.log(header);

    // selectors.forEach(async (selector, index) => {
    //   const data = await page.$eval(selector, (el) => el.textContent?.trim());
    //   if (data) scrappedData.push(data);
    //   // console.log(data);
    // });
    // console.log(scrappedData);
  } catch (error) {
    console.log(error);
    await browser?.close();
  } /* finally {
    await browser?.close();
  } */
  await browser?.close();
}
