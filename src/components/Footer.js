import React from 'react'
import '../stylesheet/Footer.css'
import {FaRegCopyright} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <a href="/aboutUs">About Us</a> <br></br>
        <a href="/terms">Terms & Conditions</a> <br></br>
        <a href="/privacy">Privacy & Cookie Policies</a> <br></br>
      </div>
      <div></div>
      <div className="randr-container">
        <p><FaRegCopyright />UniLife 2022</p>
      </div>
    </div>
  )
}

export default Footer