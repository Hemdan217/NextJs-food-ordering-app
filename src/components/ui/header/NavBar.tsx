"use client";
import Link from "@/components/link";

import React, { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import { Button } from "../button";
import { Routes } from "@/constants/enums";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      id: Math.random(),
      title: "Menu",
      href: Routes.MENU,
    },
    {
      id: Math.random(),
      title: "About",
      href: Routes.ABOUT,
    },
    {
      id: Math.random(),
      title: "Contact",
      href: Routes.CONTACT,
    },
  ];
  return (
    <nav>
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)}
              href={`/${link.href}`}
              className={`hover:text-primary duration-200 transition-colors font-semibold text-accent}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
