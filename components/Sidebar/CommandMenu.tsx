import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type CommandMenuProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const CommandMenu = ({ open, setOpen }: CommandMenuProps) => {
  const [inputValue, setInputValue] = useState("");

  // Toggle the menu when '/' -key is pressed
  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "/" /* && (e.metaKey || e.ctrlKey) */) {
        event.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded shadow border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          placeholder="Search"
          value={inputValue}
          onValueChange={setInputValue}
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-fuas-primary">&quot;{inputValue}&quot;</span>
          </Command.Empty>

          <Command.Group
            heading="Settings"
            className="text-sm mb-3 text-stone-400"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              Weather
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              Scraper
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              Date
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
