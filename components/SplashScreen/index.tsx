"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { motion } from "motion/react";
import { IMAGES } from "@/constants/images";

export default function SplashScreen() {
  return (
    <motion.div
      className={styles.splashScreenCover}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Image src={IMAGES.logo} width={256} height={256} alt="Logo" />
      <h1 className={styles.name}>FitSage – Your AI Fitness Companion</h1>
    </motion.div>
  );
}
