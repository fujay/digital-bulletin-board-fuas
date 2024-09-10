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
          ? "text-fuas-secondary bg-fuas-primary"
          : "bg-neutral-200/70 text-fuas-primary hover:text-fuas-secondary hover:bg-fuas-primary"
      } font-bold p-4 rounded transition-all hover:shadow-xl focus:outline-none focus:ring focus:border-fuas-primary`}
    >
      {children}
    </Link>
  );
}
