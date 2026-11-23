
import { motion } from "motion/react";

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      className="envelope-scene"
      initial={{ opacity: 0, scale: 0.7, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="envelope">

        {/* Letter behind the envelope */}
        <motion.div
          className="envelope-letter"
          initial={{ y: 0 }}
          animate={{ y: -65 }}
          transition={{ duration: 1 }}
        >
          <span>THE WEDDING OF</span>
          <h2>RAVI & AYUSHI</h2>
          <span>4th FEB 2027</span>
        </motion.div>

        {/* Envelope body */}
        <div className="envelope-back" />

        {/* Envelope front */}
        <div className="envelope-front">
          <div className="envelope-fold left-fold" />
          <div className="envelope-fold right-fold" />
        </div>

        {/* Envelope flap */}
        <motion.div
          className="envelope-flap"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: -180 }}
          transition={{ duration: 1.1, delay: 0.5 }}
        />

        {/* Interactive seal */}
        <motion.button
          className="envelope-seal"
          onClick={onOpen}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.8, rotate: 30 }}
          aria-label="Reveal the wedding invitation"
        >
          <span>✦</span>
        </motion.button>

      </div>

      <motion.p
        className="envelope-instruction"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        TOUCH THE GOLDEN SEAL TO REVEAL
      </motion.p>
    </motion.div>
  );
}
