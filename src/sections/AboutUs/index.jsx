import React , {useState} from 'react';
import styles from './about.module.scss';
import cannes from '../../assets/cannes.png';
import berlin from '../../assets/berlin.png';
import ghirigori from '../../assets/ghirigori_film.png';

const AboutUs = () => {
    return <div className={styles.box}>
        <h3 id='what-is'>Che cos’è React ?</h3>
        <p>
        REACT - Rete Audiovisiva Competitività Tecnologia- nasce dalla volontà  di sei imprese friulane appartenenti al mondo della produzione e della realizzazione audiovisiva, cinematografica e televisiva. Attraverso questa rete aziendale, le imprese coinvolte perseguono congiuntamente un duplice obiettivo: favorire la visibilità e la competitività all'estero del network, valorizzandone le competenze, e ottimizzare e rafforzare i propri processi mediante l'acquisto di attrezzature - hardware e software - che permettano di dare vita a soluzioni sempre attuali e innovative rispetto alla costante evoluzione tecnologica dettata dal mercato.        </p>
        <div style={{display: 'none'}}>
            <h3>News</h3>
            <div className={styles.newsContainer}>
                <ReviewCard 
                    img={berlin}
                    imgOpen={cannes}
                    alt={'cannes'}
                    title={'REACT AL FESTIVAL DI CANNES'}
                    desc={`REACT - REte Audiovisiva Competitività Tecnologia- nasce dalla volontà di un gruppo di sei imprese friulane afferenti al mondo della produzione e della realizzazione audiovisiva, cinematografica e televisiva che perseguono congiuntamente un duplice obiettivo: da un lato, favorire la visibilità e la competitività all'estero del network, valorizzandone le competenze, dall'altro ottimizzare e rafforzare i propri processi mediante l'acquisto di attrezzature, hardware e software che permettano di dare vita a soluzioni sempre attuali e innovative rispetto alla costante evoluzione tecnologica dettata dal mercato.`}
                />
                <ReviewCard 
                    img={berlin}
                    imgOpen={cannes}
                    alt={'cannes'}
                    title={'REACT AL FESTIVAL DI CANNES'}
                    desc={`REACT - REte Audiovisiva Competitività Tecnologia- nasce dalla volontà di un gruppo di sei imprese friulane afferenti al mondo della produzione e della realizzazione audiovisiva, cinematografica e televisiva che perseguono congiuntamente un duplice obiettivo: da un lato, favorire la visibilità e la competitività all'estero del network, valorizzandone le competenze, dall'altro ottimizzare e rafforzare i propri processi mediante l'acquisto di attrezzature, hardware e software che permettano di dare vita a soluzioni sempre attuali e innovative rispetto alla costante evoluzione tecnologica dettata dal mercato.`}
                />
                <ReviewCard 
                    img={berlin}
                    imgOpen={cannes}
                    alt={'cannes'}
                    title={'REACT AL FESTIVAL DI CANNES'}
                    desc={`REACT - REte Audiovisiva Competitività Tecnologia- nasce dalla volontà di un gruppo di sei imprese friulane afferenti al mondo della produzione e della realizzazione audiovisiva, cinematografica e televisiva che perseguono congiuntamente un duplice obiettivo: da un lato, favorire la visibilità e la competitività all'estero del network, valorizzandone le competenze, dall'altro ottimizzare e rafforzare i propri processi mediante l'acquisto di attrezzature, hardware e software che permettano di dare vita a soluzioni sempre attuali e innovative rispetto alla costante evoluzione tecnologica dettata dal mercato.`}
                />
            </div>
        </div>

    </div>
}


const ReviewCard = ({img, imgOpen, alt, title, desc}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.news} ${isOpen ? styles.newsOpen : ''}`} style={{backgroundImage: `url(${!isOpen ? img : imgOpen})`}} role='img' alt={alt} onClick={()=> setIsOpen(!isOpen)}>
            <h3>{title}</h3>
            {
                isOpen && (
                    <p>
                        {desc}
                    </p>
                )
            }
        </div>
    )


}

export default AboutUs;