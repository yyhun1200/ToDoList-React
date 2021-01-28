import React from "react";
import { useState } from "react";
import Card from "../Card/card";
import Header from "../Header/header";
import styles from "./landingPage.module.css";

const LandingPage = (props) => {
  const [userToDo, setUserToDo] = useState({ toDo: ["코딩하기", "회의하기"] });

  const addCard = (value) => {
    const newData = { ...userToDo };
    newData.toDo.push(value);
    setUserToDo(newData);
  };

  const deleteCard = (index) => {
    const replaceToDo = { ...userToDo };
    replaceToDo.toDo.splice(index, 1);
    setUserToDo(replaceToDo);
  };

  return (
    <div className={styles.LandingPage}>
      <Header addCard={addCard} />
      <div className={styles.cardContainer}>
        {userToDo.toDo.map((toDo, index) => {
          return (
            <Card
              key={index}
              order={index}
              text={toDo}
              deleteCard={deleteCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
