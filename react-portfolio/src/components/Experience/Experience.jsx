import React from 'react';
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { getImageUrl } from "../../utils.js"
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((ele, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(ele.imageSrc)} alt={`${ele.organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${ele.role}, ${ele.organisation}`}</h3>
                  <p>{`${ele.startDate} - ${ele.endDate}`}</p>
                  <ul>
                    {ele.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>
                    })}
                  </ul>
                  <h4></h4>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
