import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.Header}>
    <h1 className={styles.title}>To Do List</h1>
    <form className={styles.inputForm}>
      <input type="text" />
    </form>
  </header>
);

export default Header;
