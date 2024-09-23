import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";

type InputProps = {
  label: string;
  id: string;
  icon?: IconType;
  tooltip?: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ label, id, icon: Icon, tooltip, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger type="button" className="ml-2">
              <HiOutlineQuestionMarkCircle />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <div className="relative mt-2">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-fuas-secondary ">
              <Icon />
            </span>
          </div>
        )}
        <input
          className="block border text-fuas-primary border-fuas-secondary focus:border-fuas-primary rounded focus:outline-none w-full px-4 py-2 pl-10"
          id={id}
          name={id}
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;
