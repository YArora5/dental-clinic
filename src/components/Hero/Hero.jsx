import { motion } from "framer-motion";
import {
  CalendarDays,
  Phone,
  ShieldCheck,
  Star,
  Smile,
  Clock3,
} from "lucide-react";
import "./Hero.css";

const floatingCards = [
  {
    icon: <Star size={18} />,
    title: "4.9 Rating",
    subtitle: "Trusted by Patients",
    className: "card-one",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "10+ Years",
    subtitle: "Clinical Experience",
    className: "card-two",
  },
  {
    icon: <Smile size={18} />,
    title: "5000+ Smiles",
    subtitle: "Happy Patients",
    className: "card-three",
  },
  {
    icon: <Clock3 size={18} />,
    title: "Emergency Care",
    subtitle: "Quick Response",
    className: "card-four",
  },
];

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <span className="hero-tag">
            ✦ Modern Dental Care
          </span>

          <h1>
            Creating
            <span> Healthy </span>
            & Confident
            <br />
            Smiles Everyday.
          </h1>

          <p>
            Experience premium dental care with advanced
            technology, experienced specialists, and
            personalized treatments designed for every
            member of your family.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              <CalendarDays size={20} />
              Book Appointment
            </button>

            <button className="secondary-btn">
              <Phone size={19} />
              Call Now
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h3>5000+</h3>
              <span>Happy Patients</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>4.9★</h3>
              <span>Google Rating</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <div className="doctor-circle"></div>

          <img
            src="/images/doctor.png"
            alt="Dentist"
            className="hero-doctor"
          />

          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              className={`floating-card ${card.className}`}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >              <div className="floating-icon">
                {card.icon}
              </div>

              <div>
                <h4>{card.title}</h4>
                <span>{card.subtitle}</span>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <span>Scroll</span>

        <div className="mouse">
          <div className="wheel"></div>
        </div>

      </motion.div>

    </section>
  );
};

export default Hero;