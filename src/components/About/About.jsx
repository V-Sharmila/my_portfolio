import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Removed images */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                As a Machine Learning Engineer, I specialize in building and deploying models that solve real-world problems. My expertise includes data preprocessing, feature engineering, and model optimization to achieve high accuracy and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
                As a Data Science Engineer, I specialize in transforming raw data into actionable insights that drive impactful decision-making. My expertise lies in data preprocessing, feature engineering, and building robust machine learning models tailored to solve complex challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
