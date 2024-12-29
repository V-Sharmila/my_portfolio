import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Sharmila....
          
        </h1>
        <p className={styles.description}>
          "Enthusiastic AI and Data Science student at Shiv Nadar University, Chennai. Passionate about exploring data
          science, analyzing data, training models, and applying machine learning and AI to solve complex challenges
          and drive innovation."
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
