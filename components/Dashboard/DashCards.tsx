import { IconType } from "react-icons";
import { TbCalendar, TbChartArcs } from "react-icons/tb";

type CardProps = {
  Icon: IconType;
  title: string;
  value: string;
  period: string;
};

type DashCardProps = {
  allDataCounted: string;
  allDataPeriod: string;
  todayDataCounted: string;
};

export default function DashCard({
  allDataCounted,
  allDataPeriod,
  todayDataCounted,
}: DashCardProps) {
  return (
    <>
      <Card
        Icon={TbChartArcs}
        title="All Data"
        value={allDataCounted}
        period={allDataPeriod}
      />
      <Card
        Icon={TbCalendar}
        title="Today"
        value={todayDataCounted}
        period={new Date().toLocaleDateString()}
      />
    </>
  );
}

function Card({ Icon, title, value, period }: CardProps) {
  return (
    <div className="p-4 rounded border border-fuas-secondary col-span-2">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-fuas-primary font-medium mb-2">
            <Icon />
            {title}
          </h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>
      </div>
      <p className="text-sm text-stone-500">{period}</p>
    </div>
  );
}
