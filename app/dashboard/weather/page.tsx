import Heading from "@/components/UI/Heading";
import WeatherConfig from "@/components/WeatherConfig";

import { readKeyConfig } from "@/lib/useConfig";

export default async function Weather() {
  const { location, qrcode, graphic } = (await readKeyConfig(
    Weather.name.toLowerCase()
  )) || { location: "", qrcode: "", graphic: "Classic" };

  return (
    <>
      <Heading />
      <WeatherConfig location={location} qrcode={qrcode} graphic={graphic} />
    </>
  );
}
