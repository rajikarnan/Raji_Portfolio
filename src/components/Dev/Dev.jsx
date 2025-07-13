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
          Experienced Full-Stack Developer based in Napier, New Zealand, with a
          robust 5-year background in developing innovative technical solutions
          across various industries. Proven expertise in leading projects and
          teams to success, specializing in ReactJS, NodeJS, and VueJS among
          other technologies. Demonstrated ability to improve operational
          efficiency and project delivery through effective problem-solving and
          process optimization.
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
