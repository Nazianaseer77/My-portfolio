"use client"

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{
      AOS.init({
        easing:"ease-out-back",
        duration: 1200,
        delay: 100,
        mirror: true,
        anchorPlacement: "bottom-bottom",
        offset: 160,
      });
  }, []);
  
  return (
    <main>
      <Hero/>
       <Projects/>
       <Skills/>
       <Contact/>
       <About/>
    </main>
  );
}

