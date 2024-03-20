import React from "react";

import styles from "./Info.module.css";
import { getImageUrl } from "../../utils";

export const Info = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Elo , Me Raj </h1>
        <p className={styles.description}>
          Currently Attending IIIT KALYANI(CSE)
          <br/>
          <br/>
          Learning BackEnd Developement 
        </p>
        <a href="mailto:rajnarayansharma110@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Info/infoImage.png")}
        alt="Hero image of me"
        className={styles.InfoImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
