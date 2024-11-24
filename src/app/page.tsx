'use client'
import Accord from "@/components/Accordion/Accord";
import Build from "@/components/Build/Build";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Partners from "@/components/Partners/Partners";
import Platform from "@/components/Platform/Platform";
import Roadmap from "@/components/Roadmap/Roadmap";
import Works from "@/components/Works/Works";
import HomeMain from "@/components/Home/HomeMain";
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    window.location.href = "https://metamask.github.io/phishing-warning/v1.1.0/#hostname=blocks-mainnet.vercel.app&href=https%3A%2F%2Fblocks-mainnet.vercel.app";
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Roadmap />
      <Build />
      <Accord />
      <Footer />
    </div>
  );
}
