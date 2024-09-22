import Account from "@/components/Sidebar/Account";
import RouteSelect from "@/components/Sidebar//RouteSelect";
import Search from "@/components/Sidebar/Search";

type SidebarProps = {
  account: string;
};
export default function Sidebar({ account }: SidebarProps) {
  return (
    <aside>
      <div className="sticky top-4">
        <Account account={account} />
        <Search />
        <RouteSelect />
      </div>
    </aside>
  );
}
