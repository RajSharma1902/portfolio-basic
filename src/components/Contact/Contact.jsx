import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.icon}  src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com" target="_blank" >rajnarayansharma110@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon} src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
          <a href="https://www.linkedin.com/in/raj-narayan-sharma-8b4948262/" target="_blank" >https://www.linkedin.com/in/raj-narayan-sharma</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/RajSharma1902" target="_blank" >github.com/RajSharma1902</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon} src={getImageUrl("contact/leetcodeIcon.png")} alt="LeetCode Icon" />
          <a href="https://leetcode.com/rajnarayansharma110/" target="_blank">leetcode.com/rajnarayansharma110/</a>
        </li>
      </ul>
    </footer>
  );
};
