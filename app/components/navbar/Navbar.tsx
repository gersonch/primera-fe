import Instagram from "@/public/icons/InstagramIcon";
import YouTube from "@/public/icons/YoutubeIcon";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";
import { BurgerIcon } from "@/public/icons/BurgerIcon";

interface NavItems {
  path: string;
  text: string;
}
export const Navbar: React.FC = () => {
  const navItems: NavItems[] = [
    { path: "/", text: "Inicio" },
    { path: "/sobre-nosotros", text: "Sobre Nosotros" },
    { path: "/tienda", text: "Tienda" },
    { path: "/contactanos", text: "Contáctanos" },
  ];
  return (
    <>
      <header className="flex justify-between items-center max-w-6xl m-auto my-4 relative">
        <h1 className="text-5xl flex flex-wrap font-bold font-oswald tracking-wide text-amber-600">
          <Link href="/">
            Primera<br></br> Fe
          </Link>
        </h1>
        <nav className="md:flex flex-1 ml-4 font-semibold hidden absolute md:static">
          {navItems.map((navItem, index) => (
            <ActiveLink key={index} {...navItem} />
          ))}
        </nav>
        <nav className="md:flex gap-4 hidden">
          <Link
            href="https://www.instagram.com/primerafe/"
            target="_blank"
            style={{ color: "black" }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCCGkAW88Kqnd4cpgr_wV8Uw"
            target="_blank"
            style={{ color: "black" }}
          >
            <YouTube />
          </Link>
        </nav>
        <button className="md:hidden">
          <BurgerIcon />
        </button>
      </header>
    </>
  );
};
