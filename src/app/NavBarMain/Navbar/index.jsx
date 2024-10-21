'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/app/NavBarMain/anim';
import Body from '@/app/NavBarMain/Body/index';
import Footer from '@/app/NavBarMain/Footer/index';
import Image from '@/app/NavBarMain/Image/index';

const links = [
  {
    title: "Home",
    href: "/",
    src: "pexels-conojeghuo-175695.jpg"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "pexels-conojeghuo-175695.jpg"
  },
  {
    title: "About Us",
    href: "/about",
    src: "pexels-conojeghuo-175695.jpg"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "pexels-conojeghuo-175695.jpg"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "pexels-conojeghuo-175695.jpg"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}