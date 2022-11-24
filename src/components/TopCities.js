import React from 'react'

function TopCities({data}) {

  const baseUrl="https://unilife-server.herokuapp.com"

const imageStyle={
  backgroundImage: `url("")`
}

  return (
    <div>{data.name}</div>
  )
}

export default TopCities