"use client"
import appScreen from "../assets/images/product.avif";
import Image from 'next/image';
import {motion , useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]

  });

const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);

  return (
    <section id="#ui" className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">Intuitive and Powerful</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 ">Interain combines a streamlined interface with advanced, AI-driven tools to personalize your interview prep journey. From resume feedback to practice quizzes, get everything you need to succeed—all in one place.</p>
        </div>
        <div className="flex justify-center">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        <Image src={appScreen}  ref={appImage} alt="app screen" className="mt-14" />
        </motion.div>
        </div>

      </div>

    </section>
  )
};
