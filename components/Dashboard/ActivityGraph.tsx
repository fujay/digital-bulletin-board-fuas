"use client";

import { TbActivity } from "react-icons/tb";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ActivityGraphProps = {
  data: any;
};

export default function ActivityGraph({ data }: ActivityGraphProps) {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-fuas-secondary">
      <div className="p-4">
        <h3 className="flex text-fuas-primary items-center gap-1.5 font-medium">
          <TbActivity /> Activity for the week
        </h3>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip wrapperClassName="rounded" />
            <Legend />
            <Line
              type="monotone"
              dataKey="datasets"
              stroke="#2D89CC"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
