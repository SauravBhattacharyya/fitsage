"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Welcome to FitSage
    </motion.h1>
  );
}
