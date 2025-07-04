import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-12 w-12  rounded-sm overflow-hidden cursor-pointer"
      >
        <Image src={IMAGES.logo} width={256} height={256} alt="Logo" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="/login" className="text-sm font-semibold">
          <span>Login</span>
        </Link>
      </motion.div>
    </header>
  );
}
