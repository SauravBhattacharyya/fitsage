"use client";
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

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Welcome to FitSage
    </motion.h1>
  );
}
