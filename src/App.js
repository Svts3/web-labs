import './App.css';
import React from 'react';
import Header from "./containers/Header/Header.jsx";
import Hero from "./containers/Hero/Hero.jsx";
import Footer from "./containers/Footer/Footer.jsx";
import SecondSection from './containers/second-section/second-section';
import ThirdSection from './containers/third-section/third-section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
