"use client";

import { usePathname } from "next/navigation";

export default function Heading() {
  const path = usePathname();

  const heading = path.split("/").at(-1);
  const capitalizedHeading = heading
    ? heading.charAt(0).toUpperCase() + heading.slice(1)
    : "";

  return (
    <h1 className="flex flex-row flex-nowrap items-center mt-24 text-4xl font-bold">
      <span className="flex-grow block border-t-2 border-fuas-secondary"></span>
      <span className="flex-none block mx-4 px-4 py-2.5 rounded leading-none bg-fuas-primary text-fuas-secondary">
        {capitalizedHeading}
      </span>
      {path.split("/").length > 2 && (
        <span className="flex-none block mr-4 rounded leading-none font-medium text-fuas-primary">
          {"settings"}
        </span>
      )}
      <span className="flex-grow block border-t-2 border-fuas-secondary"></span>
    </h1>
  );
}
