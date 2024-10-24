import React from 'react'
import "@/app/Body/body.scss"
import SectionOne from './Section1/SectionOne'
import SectionTwo from './Section2/SectionTwo'
import SectionThree from './Section3/SectionThree'
import SectionFour from './Section4/SectionFour'
import SectionFive from './Section5/SectionFive'
import SectionSix from './Section6/SectionSix'
const TestBody = () => {
  return (
    <div className='main_body_container'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* Section re-arrangement between section4 and 5 */}
      <SectionFive />
      <SectionFour />
      <SectionSix />
    </div>
  )
}

export default TestBody
