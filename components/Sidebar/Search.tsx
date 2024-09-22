"use client";

import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CommandMenu } from "@/components/Sidebar/CommandMenu";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-300 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <HiMagnifyingGlass className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full border-none bg-transparent placeholder:text-stone-500 focus:outline-none"
        />
        <span className="p-2 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-3 top-1/2 -translate-y-1/2">
          /
        </span>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}
