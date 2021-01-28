import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { text } = props;
  return (
    <div className={styles.Card}>
      <span>X</span>
      <h2>{text}</h2>
    </div>
  );
};

export default Card;
