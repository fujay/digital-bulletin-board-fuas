import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-fuas.png";
import NavLink from "./nav-link";

export default function DashboardHeader() {
  return (
    <header className="animate-slide flex items-center justify-between pt-3 px-3">
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
