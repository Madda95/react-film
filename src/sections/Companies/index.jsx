import React from 'react'
import styles from './companies.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carousel1, carousel2 } from './data';

const Companies = () => {
    return <div className={styles.box}>
        <h3>Le aziende della rete</h3>
        <div className={styles.carouselCont}>
            <Carousel 
            showIndicators={false}
            showStatus={false}
            >
                <div className={styles.cards}>
                    {
                        carousel1.map(item => <CompanyCard img={item.img} title={item.title} description={item.description} key={item.title}/>)
                    }
                </div>
                <div className={styles.cards}>
                    {
                        carousel2.map(item => <CompanyCard img={item.img} title={item.title} description={item.description} key={item.title}/>)
                    }
                </div>
            </Carousel>
        </div>
    </div>
};


const CompanyCard = ({img, title, description}) => {
    return <div className={styles.companiesCard}>
        <div className={styles.img} style={{backgroundImage: `url(${img})`}} role={'img'} alt={title}></div>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
    </div>
}

export default Companies;