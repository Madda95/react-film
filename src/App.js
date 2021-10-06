import React, { useEffect, useState } from 'react';
import Landing from './sections/Landing';
import AboutUs from './sections/AboutUs';
import Companies from './sections/Companies';
import Footer from './sections/Footer';
import './styles/index.css';
import logo from './assets/favIco.png';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const favIco = document.createElement('link');
    favIco.rel = 'icon';
    favIco.href = logo;
    favIco.type = 'image/x-icon';
    document.head.append(favIco);

    if(document.body.clientWidth < 878) {
      setIsMobile(true);
    }

  }, [logo, isMobile]);

  return <>
  {
    !isMobile ? (
      <>
        <Landing />
        <AboutUs />
        <Companies />
        <Footer />
      </>
    ) : (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color:'#01ffff', height: '100vh', textAlign: 'center', lineHeight: '46px' }}> <h1>Il sito è disponibile solo <br /> in versione desktop</h1></div>
    )
  }

  </>;
}

export default App;
