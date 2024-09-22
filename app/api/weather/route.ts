import { mongoDBConnect } from "@/lib/remoteDB-util";
import Weather from "@/models/Weather";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoDBConnect();

  try {
    const weather = await Weather.find({});

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
