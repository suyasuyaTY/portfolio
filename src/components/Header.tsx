import Link from "next/link";
import styles from "@/styles/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">TYの部屋</Link>
      </h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">TOP</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/works">WORKS</Link>
          </li>
          <li>
            <Link href="/articles">ARTICLES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
