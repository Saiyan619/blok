import React from 'react'
import "@/app/Body/body.scss"
import SectionOne from './Section1/SectionOne'
import SectionTwo from './Section2/SectionTwo'
import SectionThree from './Section3/SectionThree'
import SectionFour from './Section4/SectionFour'
import SectionFive from './Section5/SectionFive'
const TestBody = () => {
  return (
    <div className='main_body_container'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      
    </div>
  )
}

export default TestBody
