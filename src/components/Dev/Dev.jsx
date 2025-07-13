import React from "react";

import styles from "./Dev.module.css";
import { getImageUrl } from "../../utils";

export const Dev = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/myImage.png")}
        alt="Its meee"
        className={styles.heroImg}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Raji Karnan</h1>
        <p className={styles.description}>
          A passionate full‑stack developer who transforms ideas into sleek,
          user-friendly web applications. With a strong foundation in
          JavaScript, React, Vue and Node.js, I build meaningful digital experiences
          that prioritize clarity, performance, and user engagement. 
        </p>
        <div className={styles.actionButtons}>
          <a
            href={getImageUrl("hero/Resume.pdf")}
            download="Raji_Resume.pdf"
            className={styles.contactBtn}
          >
            Download Resume (PDF)
          </a>

          <a href="mailto:rajikarnan24@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
