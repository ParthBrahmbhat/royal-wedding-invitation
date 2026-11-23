
import { motion } from "motion/react";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  delay: (i % 8) * 0.7,
  duration: 6 + (i % 6),
  size: 2 + (i % 3)
}));

export default function ParticleBackground() {
  return (
    <div className="particle-background">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="gold-particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size
          }}
          initial={{
            y: "10vh",
            opacity: 0
          }}
          animate={{
            y: "-100vh",
            opacity: [0, 0.8, 0.5, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
