import React from 'react';
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import tools from "../../data/tools.json";
import { getImageUrl } from "../../utils.js";
export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.tools}>
                    <div className={styles.subheading}>Platforms & Tools</div>
                    <div className={styles.skills}>
                        {tools.map((tool, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
                                    </div>
                                    <p>{tool.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
