import React from "react";

import styles from "./Experience.module.css";
import skillsData from "../../data/skills.json";  // Renamed to skillsData for clarity
import history from "../../data/history.json";

export const Experience = () => {
  const skills = skillsData.Skills;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* Languages */}
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Languages</h3>
            <ul>
              {skills.Languages.map((language, id) => (
                <li key={id} className={styles.skillItem}>{language}</li>
              ))}
            </ul>
          </div>
          
          {/* Tools */}
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Tools</h3>
            <ul>
              {skills.Tools.map((tool, id) => (
                <li key={id} className={styles.skillItem}>{tool}</li>
              ))}
            </ul>
          </div>
          
          {/* OS */}
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>OS</h3>
            <ul>
              <li className={styles.skillItem}>{skills.OS}</li>
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Soft Skills</h3>
            <ul>
              {skills["Soft Skills"].map((softSkill, id) => (
                <li key={id} className={styles.skillItem}>{softSkill}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
