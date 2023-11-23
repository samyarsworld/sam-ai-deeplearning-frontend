"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  const item = SIDEBAR_ITEMS.find((item) => item.href === pathname);

  return (
    <nav className="flexBetween bg-green-8 text-white max-container padding-container relative z-30 py-5 navbar">
      <Link href="/">
        <Image src="/planet.svg" alt="logo" width={50} height={30} />
      </Link>

      <h1>{item?.name || "SamAI Playground"}</h1>

      <div className="lg:flexCenter hidden"></div>
    </nav>
  );
};
export default Navbar;
