import React from 'react'
import '../stylesheet/Header.css'
import {MdMailOutline} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"
import {BsHouse} from "react-icons/bs"

function Header() {
  return (
    <div className='header-container'>
    <div className='header-left'>
            <a href="/" className='unilife-link'><BsHouse />UniLife</a>
        </div>
        <div className='header-right'>
            <button className='shortlist'><AiOutlineMail />Shortlist</button>
            <button className='contactus'><MdMailOutline />Contact Us</button>
        </div>
    </div>
  )
}

export default Header