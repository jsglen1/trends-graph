import React from "react";
import { NavigationMenuNavbar } from "./navigation-menu";
import { ModeToggle } from "../mode-toogle";
import Link from "next/link";
import Image from "next/image";
import { DropDownMenu } from "../drop-down-menu/drop-down-menu";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex h-14 items-center justify-between px-5 shadow-md">
          <li className="hidden md:block">
            {" "}
            <NavigationMenuNavbar />
          </li>
          <li className="hidden md:block">
            {" "}
            <ModeToggle />
          </li>
          <li className="md:hidden flex w-full items-center justify-between space-x-2">
            <DropDownMenu />
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
