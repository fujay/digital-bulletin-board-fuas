import DateTime from "@/components/DateTime";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen">
      <div>1</div>
      <div>2</div>
      <div>
        <DateTime />
      </div>
      <div className="col-span-3">4</div>
      <div className="col-span-3 row-start-4">5</div>
    </div>
  );
}
