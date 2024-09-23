"use server";

import { saveConfig } from "@/lib/useConfig";
import { z } from "zod";

const schemaGeneral = z.object({
  time: z.number().int().min(1).max(300),
  db: z.enum(["None", "Local", "Remote"]),
  images: z.enum(["Local", "Remote"]),
  stale: z.number().int().min(1).max(1440),
});

const schemaWeather = z.object({
  location: z
    .string()
    .regex(/^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/)
    // ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$
    .or(z.string().min(2)),
  qrcode: z.string().nullable(),
  graphic: z.enum(["Classic", "Animated"]),
});

const schemaDate = z.object({
  clock: z.enum([
    "Clock",
    "Date",
    "Clock and Date",
    "Clock and Date without time",
  ]),
});

export async function onGeneralSaveAction(
  previousState: any, // { message: string },
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const parse = schemaGeneral.safeParse({
    time: parseInt(formData.get("time") as string),
    db: formData.get("db"),
    images: formData.get("images"),
    stale: parseInt(formData.get("stale") as string),
  });

  if (!parse.success) {
    return { message: `Failed to create: ${parse.error}` }; // error.flatten().fieldErrors
  }

  const data = parse.data;
  const msTime = data.time * 1000;
  const secStale = data.stale * 60;
  const { db, images } = data;
  saveConfig({ time: msTime, db, images, stale: secStale }, "general");

  return { message: "Added" };
}

export async function onWeatherSaveAction(
  previousState: any, // { message: string },
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const parse = schemaWeather.safeParse({
    location: formData.get("location"),
    qrcode: formData.get("qrcode"),
    graphic: formData.get("graphic"),
  });

  if (!parse.success) {
    return { message: `Failed to create: ${parse.error}` }; // error.flatten().fieldErrors
  }

  const data = parse.data;
  const { location, graphic, qrcode } = data;
  saveConfig({ location, graphic, qrcode }, "weather");

  return { message: "Added" };
}

export async function onDateSaveAction(
  previousState: any, // { message: string },
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const parse = schemaDate.safeParse({
    clock: formData.get("clock"),
  });

  if (!parse.success) {
    return { message: `Failed to create: ${parse.error}` }; // error.flatten().fieldErrors
  }

  const data = parse.data;
  const { clock } = data;
  saveConfig({ clock }, "date");

  return { message: "Added" };
}
