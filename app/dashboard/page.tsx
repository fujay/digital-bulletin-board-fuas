import DashboardComponent from "@/components/Dashboard/DashboardComponent";
import List from "@/components/List";
import Sidebar from "@/components/Sidebar/Sidebar";
import Heading from "@/components/UI/Heading";
import { readConfig } from "@/lib/useConfig";

export default async function Dashboard() {
  const account = process.env.EMAIL || "";
  const config = await readConfig();

  return (
    <>
      <Heading />
      <section className="grid gap-4 p-4 grid-cols-[300px,_1fr]">
        <Sidebar account={account} />
        <DashboardComponent account={account} />
        <List data={config} />
      </section>
    </>
  );
}
