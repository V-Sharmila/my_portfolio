import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:sharmilav004@gmail.com">sharmilav004@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/vinayagam-sharmila-a61ab0258/">
            linkedin.com/Vinayagam Sharmila
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/V-Sharmila">github.com/V-Sharmila</a>
        </li>
      </ul>
    </footer>
  );
};
