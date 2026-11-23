
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InvitationCard from "./InvitationCard";

export default function BlessingInvitation() {
  const [page, setPage] = useState(0);
  const touchStart = useRef(null);

  const nextPage = () => setPage(1);
  const previousPage = () => setPage(0);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const distance = touchStart.current - e.changedTouches[0].clientX;

    if (distance > 55) nextPage();
    if (distance < -55) previousPage();

    touchStart.current = null;
  };

  return (
    <main
      className="blessing-experience"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
     <div className="blessing-header">
  <span>✦ SHREE GANESHAYA NAMAH ✦</span>
  <small>ROYAL WEDDING INVITATION</small>
</div>

      <AnimatePresence mode="wait">

        {page === 0 ? (
          <motion.section
            key="blessing"
            className="blessing-cover"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.65 }}
          >
            <div className="ganesha-glow" />

            <motion.img
              src="/images/Ganesha.png"
              alt="Lord Ganesha"
              className="ganesha-cover-image"
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <p className="blessing-mantra">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <h1 className="blessing-title">
              With the blessings<br />
              of Lord Ganesha
            </h1>

            <p className="blessing-subtitle">
              A NEW JOURNEY BEGINS
            </p>

            <button
              className="swipe-next"
              onClick={nextPage}
            >
              DISCOVER THE INVITATION
              <ChevronRight size={17} />
            </button>

            <p className="swipe-hint">
              SWIPE LEFT TO CONTINUE →
            </p>
          </motion.section>
        ) : (
          <motion.section
            key="invitation"
            className="split-layout"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >

            <motion.aside
              className="ganesha-side"
              initial={{ x: 90, scale: 1.3, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="side-glow" />

              <motion.img
                src="/images/Ganesha.png"
                alt="Lord Ganesha blessing the wedding"
                className="ganesha-side-image"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
              />

              <p>शुभारंभ</p>
              <span>DIVINE BLESSINGS</span>
            </motion.aside>

            <div className="invitation-side">
              <InvitationCard />
            </div>

          </motion.section>
        )}

      </AnimatePresence>

      <div className="page-navigation">
        <button
          onClick={previousPage}
          disabled={page === 0}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        <span className={page === 0 ? "active-dot" : ""} />
        <span className={page === 1 ? "active-dot" : ""} />

        <button
          onClick={nextPage}
          disabled={page === 1}
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </main>
  );
}
