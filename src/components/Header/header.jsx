import React from "react";
import { useRef } from "react";

import styles from "./header.module.css";

const Header = (props) => {
  const { userToDo, setUserToDo } = { ...props };
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    const newData = { ...userToDo };
    newData.toDo.push(value);
    setUserToDo(newData);
    inputRef.current.value = "";
  };
  
  return (
    <header className={styles.Header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>To Do List</h1>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
        </form>
      </div>
    </header>
  );
};

export default Header;
