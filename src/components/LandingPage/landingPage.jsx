import React from "react";
import { useState } from "react";
import Card from "../Card/card";
import Header from "../Header/header";
import styles from "./landingPage.module.css";

const LandingPage = (props) => {
  const [userToDo, setUserToDo] = useState({ toDo: ["코딩하기", "회의하기"] });

  return (
    <div className={styles.LandingPage}>
      <Header userToDo={userToDo} setUserToDo={setUserToDo} />
      <div className={styles.cardContainer}>
        {userToDo.toDo.map((toDo) => {
          return <Card text={toDo} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
