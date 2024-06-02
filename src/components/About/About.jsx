import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Hoang Giang Dang</h3>
              <p>
                I'm from Viet Nam. Before I study Software Engineering Technician, I did Marketing in my country.
                Now I want to be a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};
