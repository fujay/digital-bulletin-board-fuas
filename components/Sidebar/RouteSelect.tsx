import { IconType } from "react-icons";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default function RouteSelect() {
  return (
    <div className="space-y-8">
      <Route Icon={HiOutlineCircleStack} title="All Data" selected={true} />
      <Route Icon={HiOutlineSun} title="Weather Data" />
      <Route Icon={HiOutlineGlobeAlt} title="Scraper Data" />
    </div>
  );
}

const Route = ({
  Icon,
  title,
  selected = false,
}: {
  Icon: IconType;
  title: string;
  selected?: boolean;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-300  bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-fuas-primary" : "text-black"} />
      <span>{title}</span>
    </button>
  );
};
