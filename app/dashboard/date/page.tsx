import DateConfig from "@/components/DateConfig";
import Heading from "@/components/UI/Heading";
import { readKeyConfig } from "@/lib/useConfig";

export default async function Date() {
  const { clock } = (await readKeyConfig(Date.name.toLowerCase())) || {
    date: "Clock",
  };

  return (
    <>
      <Heading />
      <DateConfig clock={clock} />
    </>
  );
}
