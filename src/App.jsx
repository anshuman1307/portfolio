import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
