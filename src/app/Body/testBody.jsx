import React from 'react'
import "@/app/Body/body.scss"
import SectionOne from './Section1/SectionOne'
import SectionTwo from './Section2/SectionTwo'
import SectionThree from './Section3/SectionThree'
import SectionFour from './Section4/SectionFour'
const TestBody = () => {
  return (
    <div className='main_body_container'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  )
}

export default TestBody
