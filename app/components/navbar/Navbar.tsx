import Instagram from "@/public/icons/InstagramIcon";
import YouTube from "@/public/icons/YoutubeIcon";
import Link from "next/link";

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
      <header className="flex justify-between items-center max-w-6xl m-auto my-4">
        <h1 className="text-5xl flex flex-wrap">
          <Link href="/">
            Primera<br></br> Fe
          </Link>
        </h1>
        <nav className="flex flex-1 ml-4 gap-4">
          {navItems.map((navItem, index) => (
            <Link key={index} href={navItem.path}>
              {navItem.text}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-4">
          <Link href="https://www.instagram.com/primerafe/" target="_blank">
            <Instagram />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCCGkAW88Kqnd4cpgr_wV8Uw"
            target="_blank"
          >
            <YouTube />
          </Link>
        </nav>
      </header>
    </>
  );
};
