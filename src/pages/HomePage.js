import React, {useEffect, useState} from 'react'
import '../stylesheet/HomePage.css'
import axios from 'axios'


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
      {
        topCities.map(item=>{
          return <p>{item.name}</p>
        })
      }
    </div>
  )
}

export default HomePage