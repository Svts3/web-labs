import './App.css';
import React from 'react';
import Header from "./containers/Header/Header.jsx";
import Hero from "./containers/Hero/Hero.jsx";
import Footer from "./containers/Footer/Footer.jsx";
import SecondSection from './containers/second-section/second-section';
import ThirdSection from './containers/third-section/third-section';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Catalogue from './containers/Catalogue/Catalogue';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
          <AppRoutes/>
        <Footer/>
      </Router>

     
      
    </div>
  );
}

function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<><Hero /><SecondSection /><ThirdSection/></>}></Route>
      <Route path='/catalogue' element={<Catalogue/>}></Route>
    </Routes>
  );
}
export default App;
