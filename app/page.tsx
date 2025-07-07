"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingIntro from "@/components/LandingIntro";
import SplashScreen from "@/components/SplashScreen";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplashScreen) return <SplashScreen />;

  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <LandingIntro />
      <Footer />
    </motion.div>
  );
}
