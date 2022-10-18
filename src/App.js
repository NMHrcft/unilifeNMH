import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Social from './components/Social'
import Banner from './components/Banner';
import CityCard from './components/CityCard';



function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <CityCard/>
      <HomePage/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
