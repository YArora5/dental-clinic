import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <motion.div
          className="footer-about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2>
            Luma
            <span>Dental</span>
          </h2>

          <p>
            We create confident smiles through
            advanced technology, experienced
            dentists, and compassionate care.
            Your oral health is our priority.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaFacebook size={20} />
            </a>

            <a href="#">
              <FaInstagram size={20} />
            </a>

            <a href="#">
              <FaTwitter size={20} />
            </a>

            <a href="#">
              <FaLinkedin size={20} />
            </a>

          </div>

        </motion.div>

        {/* QUICK LINKS */}

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
        >

          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>

        </motion.div>

        {/* SERVICES */}

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >

          <h3>Services</h3>

          <a href="#">Dental Implant</a>
          <a href="#">Teeth Whitening</a>
          <a href="#">Smile Makeover</a>
          <a href="#">Root Canal</a>
          <a href="#">Braces</a>
          <a href="#">Emergency Care</a>

        </motion.div>

        {/* CONTACT */}

        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
        >

          <h3>Contact</h3>

          <div className="footer-contact-item">

            <Phone size={18} />

            <span>
              +1 234 567 890
            </span>

          </div>

          <div className="footer-contact-item">

            <Mail size={18} />

            <span>
              hello@lumadental.com
            </span>

          </div>

          <div className="footer-contact-item">

            <MapPin size={18} />

            <span>
              123 Smile Street,
              New York, USA
            </span>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Luma Dental.
          All Rights Reserved.
        </p>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >

          <ArrowUp size={18} />

        </button>

      </div>

    </footer>
  );
};

export default Footer;