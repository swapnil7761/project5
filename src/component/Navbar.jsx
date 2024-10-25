import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src="./logo.png" alt="firebase logo" />
      <h1>Firebase Contact App</h1>
    </nav>
  );
};

export default Navbar;
