import "./sectionseven.scss"
import { ArrowRight, FileInputIcon } from 'lucide-react'
import React from 'react'

const SectionSeven = () => {
  return (
    <div className="section_seven_container">
          <div className="newsletter_container">
              <span className="newsletter_heading_text">Follow along</span>
              <p className="newsletter_sub_text">Join the Blok newsletter to stay updated</p>
              <p className="newsletter_sub_sub_text">Only if you haven&apos;t downloaded the app or purchased Blok</p>

              <div className="newsletter_input_container">
                  <input className="newsletter_input" placeholder="Enter your Email" />
                  <ArrowRight className='text-black bg-white rounded w-6 h-6 p-1'/>
              </div>
      </div>
    </div>
  )
}

export default SectionSeven
