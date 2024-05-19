import React from 'react';
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
            <a href="mailto:skansal1018@gmail.com">skansal1018@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
            <a href="https://www.linkedin.com/in/skansal1018">linkedin.com/in/skansal1018</a>
        </li>
        {/* <li>
            <img src={getImageUrl(contact/githubIcon.png)} alt="Github Icon"/>
            <a href="mailto:skansal1018@gmail.com">skansal1018@gmail.com</a>
        </li> */}
    </ul>
  </footer>
}
