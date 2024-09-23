import BulletinForm from "@/app/dashboard/edit/[id]/BulletinForm";
import { Modal } from "@/components/UI/Modal";
import { getBulletin } from "@/lib/getBulletin";

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
      <Modal>
        <div className="p-8 max-w-md space-y-2">
          <h1 className="text-2xl">No Bulletin found with ID {id}.</h1>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="p-8 max-w-md space-y-2">
        <h1 className="text-2xl">Edit Bulletin {id}</h1>
        <BulletinForm bulletin={bulletin} />
      </div>
    </Modal>
  );
}
