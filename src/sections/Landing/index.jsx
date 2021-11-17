import React from 'react';
import styles from './landing.module.scss';
import logo_white from '../../assets/logo_white.png';
import arrow_down from '../../assets/arrow-down.png';
import bg from '../../assets/bg2.jpg';

import ghirigori from '../../assets/companies/ghirigori.png';
import lab from '../../assets/companies/lab.png';
import slingshotfilm from '../../assets/companies/slingshotfilm.png';
import tesla from '../../assets/companies/tesla.png';
import tracciato from '../../assets/companies/tracciato.png';
import pilgrim from '../../assets/companies/pilgrim.png';

import scrollToElement from 'scroll-to-element';

const navigateTo = () => {
    scrollToElement('#what-is', {
        offset: -20,
        ease: 'linear',
        duration: 250
    })
}

const Landing = () => {
    return <div className={styles.box} style={{background: 'url(' + bg + ')'}}>
        <div className={styles.header}>
            <img src={logo_white} alt='Logo React' />
            <h3>la rete delle imprese dell' audiovisivo</h3>
        </div>
        <h1>Le cose si cambiano <br /> in un solo modo.<br /> Insieme.</h1>
        <div className={styles.discoverCont} onClick={navigateTo}>
            <span>scopri chi siamo</span>
            <img src={arrow_down} alt='freccia' />
        </div>
        <div className={styles.carousel}>
            <a href='https://www.a-lab.eu' target="_blank" rel="noreferrer">
                <img src={lab} alt='Logo lab' />
            </a>
            <a href='https://www.cooperativapuntozero.it/about' target="_blank" rel="noreferrer">
                <img src={tracciato} alt='Logo Tracciato' />
            </a>
            <a href='http://teslaproduction.it' target="_blank" rel="noreferrer">
                <img src={tesla} alt='Logo Tesla film' />
            </a>
            <a href='https://www.pilgrimfilm.it' target="_blank" rel="noreferrer">
                <img src={pilgrim} alt='Logo pilgrim' />
            </a>
            <a href='www.ghiri-gori.com' target="_blank" rel="noreferrer">
                <img src={ghirigori} alt='Logo Ghirigori' />
            </a>
            <a href='https://www.slingshotfilms.it' target="_blank" rel="noreferrer">
                <img src={slingshotfilm} alt='Logo Sling shot film' />
            </a>
        </div>
        <div className={styles.landFoot}>
            Progetto di rete sostenuto dalla Camera di Commercio Venezia Giulia Trieste Gorizia
        </div>
    </div>
}


export default Landing;