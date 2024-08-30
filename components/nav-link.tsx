"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path === href
          ? "text-blue-800 bg-fuas-secondary rounded-xl"
          : "text-fuas-primary bg-gray-400 hover:bg-fuas-secondary hover:rounded-xl"
      } font-bold p-4 rounded-3xl transition-all hover:shadow-xl`}
    >
      {children}
    </Link>
  );
}
