import React from "react";
import styles from "./loginPage.module.css";
import kakao from "../../img/kakaologin.png";
import Header from "../Header/header";

const LoginPage = (props) => {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <img src={kakao} alt="카카오 로그인" />
      </div>
    </div>
  );
};

export default LoginPage;
