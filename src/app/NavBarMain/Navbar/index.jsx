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
    src: "blok.png"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "blokPic1.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "blok3.png"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "blok.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "blok.png"
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