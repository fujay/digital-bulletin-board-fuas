import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-fuas.png";
import NavLink from "./nav-link";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mt-3 mx-3 mb-8">
      <div className="hover:animate-pulse hover:ring">
        <Link href="/">
          <Image src={logo} alt="FUAS logo" priority />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/general">General</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/weather">Weather</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/scraper">Scraper</NavLink>
          </li>
          <li>
            <NavLink href="/dashboard/date">Date</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
