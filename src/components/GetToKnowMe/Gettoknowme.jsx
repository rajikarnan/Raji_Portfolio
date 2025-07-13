import React from "react";

import styles from "./Gettoknowme.module.css";
import { getImageUrl } from "../../utils";

export const Gettoknowme = () => {
  return (
    <section className={styles.container} id="getToKnowMe">
      <h2 className={styles.title}>What I can do</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I specialize in creating responsive and user-friendly interfaces
                using ReactJS, VueJS, and other modern frontend technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have a strong background in backend development, focusing on
                NodeJS and ExpressJS to create robust APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
      <h2 className={styles.title2}>If you need me in Office</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Location.jpg")}
          alt="Location"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/locationIcon.png")}
              alt="Location icon"
            />
            <div className={`${styles.aboutItemText} ${styles.locationText}`}>
              <h3>My location</h3>
              <p>
                Napier, New Zealand. I am open to relocating within New Zealand
                for the right opportunity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/visaIcon.png")} alt="Visa icon" />
            <div className={`${styles.aboutItemText} ${styles.visaText}`}>
              <h3>Open Work Visa</h3>
              <p>
                No restrictions, allowing me to explore various opportunities in
                the tech industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
