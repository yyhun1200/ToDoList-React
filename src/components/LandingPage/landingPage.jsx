import React from "react";
import Card from "../Card/card";
import Header from "../Header/header";
import styles from "./landingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={styles.LandingPage}>
      <Header />
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  );
};

export default LandingPage;
