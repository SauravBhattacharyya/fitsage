"use client";
import Header from "@/components/Header";
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
    <motion.main
      className="container mx-auto p-2 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-color-primary">
          Welcome to FitSage
        </h1>
        <p className="text-lg max-w-xl mx-auto text-color-secondary">
          FitSage is your AI-powered fitness companion. Get personalized body
          insights, smart diet plans, and tailored workout routines — all based
          on your unique goals. No guesswork, just actionable guidance to help
          you feel and perform your best.
        </p>
      </section>
    </motion.main>
  );
}
