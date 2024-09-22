import { FaRegCircleUser } from "react-icons/fa6";

type AccountProps = {
  account: string;
};
export default function Account({ account }: AccountProps) {
  return (
    <div className="border-b mb-4 mt-2 gap-2 pt-0.5 pb-4 border-stone-300 flex flex-col items-center">
      <FaRegCircleUser className="text-3xl text-fuas-primary" />
      <span>{account}</span>
    </div>
  );
}
