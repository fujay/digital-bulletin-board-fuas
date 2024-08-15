import OpenAI from "openai";
import puppeteer from "puppeteer";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function openAIScraper(
  url: string,
  prompt: string,
  width: number = 1920,
  height: number = 1080
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height });

  await page.goto(url, { waitUntil: "networkidle0" });

  const htmlBody = await page.evaluate(() => document.body.innerHTML);

  await browser.close();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Here is the HTML of the website: ${htmlBody}. Give me a summary of the content.`,
      },
    ],
    model: "gpt-3.5-turbo",
    // model: "gpt-4o-mini",
  });

  console.log(1, response);
  console.log(2, response.choices[0].message.content);
}

export async function openAIVision(
  url: string,
  prompt: string,
  qualityDetail: "auto" | "low" | "high" = "auto",
  width: number = 1920,
  height: number = 1080
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height });

  await page.goto(url, { waitUntil: "networkidle0" });

  const imgBase64 = await page.screenshot({
    path: "public/visionScreenshot.jpg",
    fullPage: true,
    encoding: "base64",
  });

  await browser.close();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Give me the description of the image in JSON format.",
          },
          {
            type: "image_url",
            image_url: {
              url: "data:image/jpeg;base64," + imgBase64,
              detail: qualityDetail,
            },
          },
        ],
      },
    ],
    model: "gpt-4-vision-preview",
    // model: "gpt-4o-mini",
  });
}
