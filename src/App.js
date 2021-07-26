import React from 'react';
import Landing from './sections/Landing';
import AboutUs from './sections/AboutUs';
import Companies from './sections/Companies';
import Footer from './sections/Footer';
import './styles/index.css';

const App = () => {
  return <>
    <Landing />
    <AboutUs />
    <Companies />
    <Footer />
  </>;
}

export default App;
