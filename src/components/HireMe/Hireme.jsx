import React from "react";

import styles from "./Hireme.module.css";
import { getImageUrl } from "../../utils";

export const Hireme = () => {
  return (
    <footer id="HireMe" className={styles.container}>
      <div className={styles.text}>
        <h2>Hire Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rajikarnan24@gmail.com">rajikarnan24@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rajikarnan">
            linkedin.com/in/rajikarnan
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/rajikarnan">github.com/rajikarnan</a>
        </li>
      </ul>
    </footer>
  );
};
