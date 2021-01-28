import React from "react";
import styles from "./loginPage.module.css";

const LoginPage = ({ authService }) => {
  const handleOnClick = () => {
    authService.logIn();
  };
  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <button onClick={handleOnClick}>구글 로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
