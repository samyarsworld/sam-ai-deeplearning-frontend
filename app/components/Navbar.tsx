import Image from "next/image";
import Link from "next/link";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <nav className="flexBetween bg-[#27272a] text-white relative z-30 p-24 py-5 lg:pr-0">
      <Link href="/">
        <Image src="/planet.svg" alt="logo" width={50} height={30} />
      </Link>
      <NavbarTitle />
      <div className="lg:flexCenter hidden"></div>
    </nav>
  );
};
export default Navbar;
