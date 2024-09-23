"use client";

import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "./table";
import { Bulletin } from "@/schemas/Bulletins";

type UserRowProps = {
  bulletin: Bulletin;
};

export default function UserRow({ bulletin }: UserRowProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/edit/${bulletin.id}`);
  };

  return (
    <TableRow onClick={handleClick}>
      <TableCell>{bulletin.title}</TableCell>
      <TableCell>{bulletin.content}</TableCell>
      <TableCell suppressHydrationWarning>
        {bulletin.createdAt.toLocaleString()}
      </TableCell>
    </TableRow>
  );
}
