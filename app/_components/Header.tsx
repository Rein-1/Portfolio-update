import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <h2 className="text-3xl">Rein-Dev</h2>
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
