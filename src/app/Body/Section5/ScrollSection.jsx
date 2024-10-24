"use client"

import { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const ScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-105%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-slate-800 py-6">
      {/* //pass x in the style prop */}
        <motion.div style={{ x }}>
       
        <Card />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSection;