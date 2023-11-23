"use client";
import React from "react";
import { SIDEBAR_ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar bg-green-7 ">
      {SIDEBAR_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={item.img}
          className={`sidebar-item ${
            pathname === item.href ? "sidebar-active-" + item.id : ""
          }`}
        >
          <div
            className="sidebar-item-circle"
            style={{ backgroundColor: item.color }}
          >
            <Image
              src={item.img}
              alt="logo"
              width={24}
              height={24}
              className="sidebar-item-logo"
            />
          </div>
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
