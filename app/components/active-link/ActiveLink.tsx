"use client";
import style from "./ActiveLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}
const ActiveLink: React.FC<Props> = ({ path, text }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${style.link} ${pathname == path && style["active-link"]}`}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
