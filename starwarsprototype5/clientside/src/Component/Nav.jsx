import "react";
import { NavLink } from "react-router-dom";
import styles from "../pages/styles/Navi.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              activeClassName={styles.activeLink}
              className={styles.navLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/comiccharacterspage"
              activeClassName={styles.activeLink}
              className={styles.navLink}
            >
              Comic Characters
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/comicseriespage"
              activeClassName={styles.activeLink}
              className={styles.navLink}
            >
              Comic Series
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;