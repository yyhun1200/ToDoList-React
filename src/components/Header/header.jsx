import React from "react";
import { useRef } from "react";

import styles from "./header.module.css";

const Header = (props) => {
  const { addCard } = { ...props };
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    addCard(value);
    inputRef.current.value = "";
  };

  return (
    <header className={styles.Header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>To Do List</h1>
        <div className={styles.inputForm} onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
        </div>
      </div>
    </header>
  );
};

export default Header;
