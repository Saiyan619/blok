import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
      <div className='footer_container'>
          <div className='footer_sub_container'>
              
              <div className='footer_sub_sub_container'>
          <svg width="102" height="103" fill="none" id="svg1650240949_1191"><g filter="url(#svg1650240949_1191_a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M51 81.842c16.99 0 30.762-13.773 30.762-30.762 0-16.99-13.773-30.762-30.762-30.762-16.99 0-30.762 13.773-30.762 30.762 0 16.99 13.773 30.762 30.762 30.762Zm0 7.238c20.987 0 38-17.013 38-38s-17.013-38-38-38-38 17.013-38 38 17.013 38 38 38Zm7.239-38.006a7.238 7.238 0 1 1-14.477 0 7.238 7.238 0 0 1 14.477 0Z" fill="#fff" /></g><path fill-rule="evenodd" clip-rule="evenodd" d="M51 81.842c16.99 0 30.762-13.773 30.762-30.762 0-16.99-13.773-30.762-30.762-30.762-16.99 0-30.762 13.773-30.762 30.762 0 16.99 13.773 30.762 30.762 30.762Zm0 7.238c20.987 0 38-17.013 38-38s-17.013-38-38-38-38 17.013-38 38 17.013 38 38 38Zm7.239-38.006a7.238 7.238 0 1 1-14.477 0 7.238 7.238 0 0 1 14.477 0Z" fill="#fff" /><defs><filter id="svg1650240949_1191_a" x="0" y=".08" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_13116_3461" /></filter></defs>
          </svg>

          <span className='hero_text'>Break free from distractions</span>

          <button className='hero_btn'>Buy Blok</button>

          </div>
          <img className='footer_img' src="/images/blok2-removebg-preview_copy1.png" alt="" />
          </div>
          <div className='copyright_text_container'>
              <div>
              <span className='copyright_text'>Blok&copy; 2024</span>
              </div>

              <div className='copyright_text_sub_container'> 
              <span className='copyright_text'>Privacy Policy</span>
              <span className='copyright_text'>Terms and Conditions</span>
              </div>
              
          </div>
    </div>
  )
}

export default Footer
