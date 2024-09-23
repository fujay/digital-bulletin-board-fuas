import { getBulletin } from "@/lib/getBulletin";
import BulletinForm from "./BulletinForm";

type EditBulletinProps = {
  params: {
    id: string;
  };
};

export default async function EditBulletin({ params }: EditBulletinProps) {
  const { id } = params;

  const bulletin = await getBulletin(id);

  if (!bulletin?.id) {
    return (
      <div className="p-8 max-w-md space-y-2">
        <h1 className="text-2xl">No Bulletin found with ID {id}.</h1>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-md space-y-2">
      <h1 className="text-2xl">Edit Bulletin {id}</h1>
      <BulletinForm bulletin={bulletin} />
    </div>
  );
}
