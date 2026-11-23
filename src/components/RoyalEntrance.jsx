

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import PalaceDoors from "./PalaceDoors";
import ParticleBackground from "./ParticleBackground";
import GoldenSeal from "./GoldenSeal";
import Envelope from "./Envelope";
import InvitationCard from "./InvitationCard";
import BlessingInvitation from "./BlessingInvitation";

export default function RoyalEntrance() {
  const [stage, setStage] = useState("entrance");

  const enterPalace = () => {
    setStage("envelope");
  };

  const revealInvitation = () => {
    setStage("opening");

    setTimeout(() => {
      setStage("card");
    }, 1300);
  };

  return (
    <main className={`royal-entrance stage-${stage}`}>

      <ParticleBackground />

      <header className="royal-header">
        ✦ ROYAL INVITATION ✦
      </header>

      <AnimatePresence mode="wait">

        {stage === "entrance" && (
          <motion.section
            key="entrance"
            className="entrance-content"
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <p className="royal-subtitle">
              A ROYAL CELEBRATION OF LOVE
            </p>

            <h1>
              A Journey
              <span>of Two Souls</span>
            </h1>

            <div className="couple-names">
              RAVI <span>&</span> AYUSHI
            </div>

            <div className="palace-stage">
              <div className="palace-light" />
              <PalaceDoors isOpen={false} />
            </div>

            <div className="seal-container">
              <GoldenSeal onClick={enterPalace} />
              <p>TOUCH TO ENTER</p>
            </div>
          </motion.section>
        )}

        {stage === "envelope" && (
          <motion.section
            key="envelope"
            className="reveal-stage"
            exit={{ opacity: 0 }}
          >
            <p className="royal-subtitle">
              A MESSAGE SEALED WITH LOVE
            </p>

            <Envelope onOpen={revealInvitation} />
          </motion.section>
        )}

        {stage === "opening" && (
          <motion.section
            key="opening"
            className="reveal-stage"
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.3, opacity: [0, 1, 0] }}
              transition={{ duration: 1.3 }}
              className="golden-burst"
            >
              ✨
            </motion.div>

            <p className="royal-subtitle">
              YOUR INVITATION IS UNFOLDING
            </p>
          </motion.section>
        )}

        
{stage === "card" && (
  <motion.section
    key="card"
    className="card-stage"
    exit={{ opacity: 0 }}
  >
    <BlessingInvitation />
  </motion.section>
)}


      </AnimatePresence>

      <footer className="royal-footer">
        MADE WITH LOVE · A CELEBRATION TO REMEMBER
      </footer>

    </main>
  );
}
