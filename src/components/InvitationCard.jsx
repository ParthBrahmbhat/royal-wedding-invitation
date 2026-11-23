

import { motion } from "motion/react";

export default function InvitationCard() {
  return (
    <motion.article
      className="reveal-card"
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="wedding-paper">

        {/* Decorative corner ornaments */}
        <div className="card-corner ornament-tl">❋</div>
        <div className="card-corner ornament-tr">❋</div>
        <div className="card-corner ornament-bl">❋</div>
        <div className="card-corner ornament-br">❋</div>

        {/* Ganpati heading */}
        <div className="invitation-ganesh">
          <span>✥</span>
          <p>॥ Shree Ganeshay Namah ॥</p>
          <span>✥</span>
        </div>

        {/* Invitation text */}
        <div className="invitation-content">

          <p className="invitation-intro">
            With the blessings of the Almighty and our elders,
          </p>

          <h2 className="father-name">
            Shri Chandresh Rameshchandra Brahmbhatt
          </h2>

          <p className="invitation-intro">
            cordially invites you and your family to the
          </p>

          <h1 className="reception-title">
            Wedding Reception
          </h1>

          <p className="of-his-son">of his son</p>

          <div className="couple-names-card">
            <h2>Dr. Ravi</h2>
            <span>&</span>
            <h2>Dr. Ayushi</h2>
          </div>

          <div className="gold-divider-card">
            <span>✦</span>
          </div>

          {/* Date */}
          <div className="event-detail">
            <strong>Date:</strong>
            <span>Thursday, 4th February 2027</span>
          </div>

          {/* Time */}
          <div className="event-detail">
            <strong>Time:</strong>
            <span>7:00 PM Onwards</span>
          </div>

          {/* Venue */}
          <div className="venue-detail">
            <strong>Venue:</strong>
            <p>
              Nilkanth Farm and Party Plot,
              Pushpak City,
              Near Hathijan Circle,
              Ahmedabad
            </p>
          </div>

          <div className="gold-divider-card">
            <span>❖</span>
          </div>

          {/* Family compliments */}
          <div className="family-compliments">
            <p>
              With Best Compliments <strong>From:</strong>
            </p>

            <h3>
              Chandresh Rameshchandra Brahmbhatt & Family
            </h3>
          </div>

        </div>

        {/* Bottom decoration */}
        <div className="invitation-bottom-ornament">
          ❋ ❖ ❋
        </div>

      </div>
    </motion.article>
  );
}
