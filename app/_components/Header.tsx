import Link from "next/link";
import { logo } from "../_constants/Constants";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src={logo.src}
          alt={logo.alt}
          width={30}
          height={50}
          className="header-icon"
        />
      </div>

      <ul className="menu">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
