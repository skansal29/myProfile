import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I am Sakshi.
                </h1>
                <p className={styles.desc}>I'm a front end developer with 5 years of experience in Angular and front-end technologies.
                    Reach out if you would like to learn more!
                </p>
                <div className={styles.btnDiv}>
                    <a href="mailto:skansal1018@gmail.com" className={styles.contactBtn}>Resume</a>
                    <a href="mailto:skansal1018@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")}
                alt="HeroImage" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}