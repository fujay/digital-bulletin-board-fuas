import DashGrid from "./DashGrid";
import TopBar from "./TopBar";

type DashboardComponentProps = {
  account: string;
};

export default function DashboardComponent({
  account,
}: DashboardComponentProps) {
  return (
    <div className="bg-white pb-4 rounded shadow">
      <TopBar account={account} />
      <DashGrid />
    </div>
  );
}
