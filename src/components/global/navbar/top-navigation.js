"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/../public/buzzlink_logo.png";

const TopNavigation = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav
      id="bottom-navigation"
      className="sticky inset-x-0 z-10 border-b-2 border-black px-3 py-2 flex justify-between items-center"
    >
      <Link href={"/influencer/home"}>
        <Image alt="Buzzlink" src={logo} className="h-[3vh] w-fit hover:drop-shadow" />
      </Link>

      <div id="tabs" className="flex justify-end gap-2 items-center">
        {items?.length > 0 && items.map((item, index) => <>{item}</>)}
      </div>
    </nav>
  );
};

export default TopNavigation;
