"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import "./animtext.scss"

export default function AnimText() {

  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
    
  return (
    <div className=''>
      <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
        className='section_1_hero_text'>
        <h1>Introducing Blok - <br /> the physical solution <br /> to digital distractions</h1>
      </motion.div>
      
      {/* <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }} className='header-right-text-container'>
        <h1>SPACES THAT INSPIRE</h1>
      </motion.div> */}
      
    </div>
  )
}