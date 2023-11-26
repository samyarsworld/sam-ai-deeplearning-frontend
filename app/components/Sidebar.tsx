"use client";
import React from "react";
import { SIDEBAR_ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-230 h-screen overflow-auto p-4 bg-gradient-to-b from-green-8 to-white">
      {SIDEBAR_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={item.img}
          className={`flex items-center p-3 rounded-lg text-sm ${
            pathname === item.href ? "sidebar-active-" + item.id : ""
          }`}
        >
          <div
            className="flexCenter w-35 h-35 rounded-full overflow-hidden mr-4"
            style={{ backgroundColor: item.color }}
          >
            <Image src={item.img} alt="logo" width={30} height={30} />
          </div>
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
