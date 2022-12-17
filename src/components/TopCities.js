import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../stylesheet/TopCities.css'


function TopCities({data}) {

  

const imageStyle={
  backgroundImage: `url('${data.image_url}')`,
  

}

  return (
    <div className='topCityCards' style={imageStyle}>{data.name}</div>
    
  )
}

export default TopCities