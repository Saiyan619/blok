import React from 'react'
import "@/app/Header/style/header.scss"
import { HeaderVideo } from './headervideo'

const Header = () => {
    return (
        <header>
            <div className='header'>
                <HeaderVideo />
                </div>
            <div className='hero_container'>
                <span>Break free from phone distractions</span>
                <button className='hero_btn'>Get Blok  &gt;</button>
                <p>Trusted by 1400+ <br/> high performing individuals.</p>
            </div>
      </header>
    )
  }
  
  export default Header
  
