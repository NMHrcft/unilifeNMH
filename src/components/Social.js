import React from 'react'
import '../stylesheet/Social.css'
import {MdFacebook} from "react-icons/md"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


function Social() {
  return (
    <div className='social-container'>
        <div className='touch-box'>
            <h1>Keep in touch</h1> <br></br>
            <p>Curious about new offering? Sign-up for our weekly newsletter and stay informed.</p>
        </div>
        <div className='social-box'>
          <h1>Lets Socialize</h1>
          <a href="/facebook" className='asocial'><MdFacebook />Facebook</a>
          <a href="/Twitter" className='asocial'><FaTwitter />Twitter</a>
          <a href="/instagram" className='asocial'><FaInstagram />Instagram</a>

    </div>
    </div>
  )
}

export default Social