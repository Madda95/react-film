import React from 'react';
import styles from './about.module.scss';
import cannes from '../../assets/cannes.png';
import berlin from '../../assets/berlin.png';
import ghirigori from '../../assets/ghirigori_film.png';

const AboutUs = () => {
    return <div className={styles.box}>
        <h3>Che cos’è React ?</h3>
        <p>
        REACT - REte Audiovisiva Competitività Tecnologia- nasce dalla volontà di un gruppo di sei imprese friulane afferenti al mondo della produzione e della realizzazione audiovisiva, cinematografica e televisiva che perseguono congiuntamente un duplice obiettivo: da un lato, favorire la visibilità e la competitività all'estero del network, valorizzandone le competenze, dall'altro ottimizzare e rafforzare i propri processi mediante l'acquisto di attrezzature, hardware e software che permettano di dare vita a solu- zioni sempre attuali e innovative rispetto alla costante evoluzione tecnologica dettata dal mercato.
        </p>
        <h3>News</h3>

        <div className={styles.newsContainer}>
            <div className={styles.bigNews} style={{backgroundImage: `url(${cannes})`}} role='img' alt='festival di Cannes'>
                <h3>REACT AL FESTIVAL DI CANNES</h3>
                <p>REACT - Rete Audiovisiva Competitività Tecnologia REACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività TecnologiaREACT - Rete Audiovisiva Competitività Tecnologia</p>
            </div>
            <div className={styles.smallNews} style={{backgroundImage: `url(${berlin})`}} role='img' alt='festival di Cannes'>
                <h3>REACT SBARCA A BERLINO</h3>
            </div>
            <div className={styles.smallNews} style={{backgroundImage: `url(${ghirigori})`}} role='img' alt='festival di Cannes'>
                <h3>IL NUOVO FILM DI GHIRIGORI</h3>
            </div>
        </div>
    </div>
}

export default AboutUs;