import React from 'react';
import styles from './footer.module.scss';


const Footer = () => {
    return <div className={styles.box}>
        <div className={styles.main}>
            <div className={styles.contacts}>
                <a>A-LAB</a>
                <a>Via Mascagni 7</a>
                <a>Trieste (TS)</a>
                <a href="mailto:hello@react.it ">hello@react.it</a>
                <a href="tel:+390402332992">+39 040 2332992</a>
            </div>
            <div className={styles.map}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.436419092518!2d13.798561616029133!3d45.62196847910304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6bb2826ff72d%3A0x7935301cadb86cf!2sA_LAB%20s.r.l.!5e0!3m2!1sit!2sit!4v1627296039872!5m2!1sit!2sit"></iframe>
            </div>
        </div>
        <div className={styles.hr}>
            <div className={styles.line}></div>
            <div className={styles.copy}>Copyright 2021</div>
        </div>
    </div>
}

export default Footer;