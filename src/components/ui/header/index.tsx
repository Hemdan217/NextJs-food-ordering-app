import Link from "@/components/link";
import React from "react";
import NavBar from "./NavBar";
import { Routes } from "@/constants/enums";

const Header = () => {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${Routes.ROOT}`}
          className="text-primary font-semibold text-2xl"
        >
          🍕 Pizza
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
