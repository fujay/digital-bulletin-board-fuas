import GeneralConfig from "@/components/GeneralConfig";
import Heading from "@/components/UI/Heading";
import { readKeyConfig } from "@/lib/useConfig";

export default async function General() {
  const { time, db, images, stale } = (await readKeyConfig(
    General.name.toLowerCase()
  )) || { time: 0, db: "", images: "", stale: 0 };

  return (
    <>
      <Heading />
      <GeneralConfig
        time={time / 1000}
        db={db}
        images={images}
        stale={stale / 60}
      />
    </>
  );
}
