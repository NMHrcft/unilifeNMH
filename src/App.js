import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Social from './components/Social'
import Banner from './components/Banner';
import CityCard from './components/CityCard';



function App() {

  const baseUrl = 'https://unilife-server.herokuapp.com/'
  
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Banner/>
      <CityCard/>
      <HomePage/>
      <Social/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
