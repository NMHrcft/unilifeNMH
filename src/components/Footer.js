import React from 'react'
import '../stylesheet/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <a href="/aboutUs">About Us</a> <br></br>
        <a href="/terms">Terms & Conditions</a> <br></br>
        <a href="/privacy">Privacy & Cookie Policies</a> <br></br>
      </div>
    </div>
  )
}

export default Footer