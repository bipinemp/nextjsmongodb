import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navitems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
