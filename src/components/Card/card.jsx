import React from "react";
import Btn from "../Button/btn";
import styles from "./card.module.css";

const Card = (props) => (
  <div className={styles.Card}>
    <span>X</span> 
    <h2>코딩하기</h2>
  </div>
);

export default Card;
