type TopBarProps = {
  account: string;
};
export default function TopBar({ account }: TopBarProps) {
  return (
    <div className="border-b mb-4 mt-2 px-4 pb-4 border-stone-300">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="font-bold block">Hi {account.split("@")[0]}</span>
          <span className="text-stone-500 block">
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "full",
            }).format(new Date())}
          </span>
        </div>
      </div>
    </div>
  );
}
