
import { motion } from "motion/react";

export default function GoldenSeal({ onClick }) {
  return (
    <motion.button
      className="golden-seal"
      onClick={onClick}
      whileHover={{ scale: 1.12 }}
      whileTap={{
        scale: 0.82,
        rotate: 25
      }}
      animate={{
        boxShadow: [
          "0 0 15px #d8b47755",
          "0 0 35px #d8b477aa",
          "0 0 15px #d8b47755"
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity
        }
      }}
      aria-label="Enter the royal wedding invitation"
    >
      ✦
    </motion.button>
  );
}
