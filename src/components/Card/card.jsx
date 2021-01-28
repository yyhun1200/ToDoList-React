import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { order, text, deleteCard } = { ...props };
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName === "SPAN") {
      deleteCard(order);
    }
  };
  return (
    <div className={styles.Card}>
      <span onClick={handleClick}>X</span>
      <h2>{text}</h2>
    </div>
  );
};

export default Card;
