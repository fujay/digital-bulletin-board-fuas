import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
/* City or Coordinates as &apos;lat,lon&apos; like 50.11552, 8.68417 */
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
      {tooltip && <label className="text-xs"> (?)</label>}
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
