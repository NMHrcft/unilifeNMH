import React from 'react'
import '../stylesheet/Social.css'

function Social() {
  return (
    <div className='social-container'>
        <div className='touch-box'>
            <h1>Keep in touch</h1> <br></br>
            <p>Curious about new offering? Sign-up for our weekly newsletter and stay informed.</p>
        </div>
        <div className='social-box'>
          <h1>Lets Socialize</h1>
          <a href="/facebook" className='asocial'>Facebook</a>
          <a href="/Twitter" className='asocial'>Twitter</a>
          <a href="/instagram" className='asocial'>Instagram</a>

    </div>
    </div>
  )
}

export default Social