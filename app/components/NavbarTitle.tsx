"use client";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "@/constants";

const NavbarTitle = () => {
  const pathname = usePathname();
  const item = SIDEBAR_ITEMS.find((item) => item.href === pathname);
  return <h1>{item?.name || "SamAI Playground"}</h1>;
};

export default NavbarTitle;
