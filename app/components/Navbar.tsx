import Image from "next/image";
import Link from "next/link";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <nav className="flexBetween bg-green-8 text-white max-container padding-container relative z-30 py-5 navbar lg:pr-0">
      <Link href="/">
        <Image src="/planet.svg" alt="logo" width={50} height={30} />
      </Link>
      <NavbarTitle />
      <div className="lg:flexCenter hidden"></div>
    </nav>
  );
};
export default Navbar;
