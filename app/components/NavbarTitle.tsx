"use client";
import { usePathname } from "next/navigation";
import { ITEMS } from "@/constants";

const NavbarTitle = () => {
  const pathname = usePathname();
  const item = ITEMS.find((item) => item.href === pathname);
  return <h1>{item?.name || "SamAI Playground"}</h1>;
};

export default NavbarTitle;
