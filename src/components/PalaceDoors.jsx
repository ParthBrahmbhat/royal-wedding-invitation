

import { motion } from "motion/react";

export default function PalaceDoors({ isOpen }) {
  return (
    <div className="palace-doors">

      <motion.div
        className="palace-door left-door"
        animate={{
          rotateY: isOpen ? -110 : 0
        }}
        transition={{
          duration: 2,
          ease: [0.7, 0, 0.2, 1]
        }}
      >
        <div className="door-ornament">
          <span>✥</span>
          <span>❖</span>
          <span>✥</span>
        </div>
        <div className="door-handle" />
      </motion.div>

      <motion.div
        className="palace-door right-door"
        animate={{
          rotateY: isOpen ? 110 : 0
        }}
        transition={{
          duration: 2,
          ease: [0.7, 0, 0.2, 1]
        }}
      >
        <div className="door-ornament">
          <span>✥</span>
          <span>❖</span>
          <span>✥</span>
        </div>
        <div className="door-handle" />
      </motion.div>

    </div>
  );
}
