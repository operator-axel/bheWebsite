"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({
  children,
  currentActiveSubmenu,
}: {
  children: React.ReactNode;
  currentActiveSubmenu: string;
}) {
  return (
    <motion.main
      key={currentActiveSubmenu} // Keyed by current navigation item
      variants={variants}
      initial={{ opacity: 0, x: -400 }}
      animate="enter"
      transition={{
        type: "spring",
      }}
    >
      {children}
    </motion.main>
  );
}
