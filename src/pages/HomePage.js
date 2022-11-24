import React, {useEffect, useState} from 'react'
import '../stylesheet/HomePage.css'
import axios from 'axios'
import TopCities from '../components/TopCities.js'


function HomePage() {
  const [topCities, setTopCities]= useState([])
useEffect(() => {
 axios.get("https://unilife-server.herokuapp.com/cities")
 .then(res=>{
  setTopCities(res.data.response)
 })
 .catch(error=>console.log(error))
}, [])
  
  return (
    <div className='homepage-container'>
        <div className='city-container'>
      {
        topCities?.map(item=>{
          return <TopCities data={item} />
        })
      }
      </div>
    </div>
  )
}

export default HomePage