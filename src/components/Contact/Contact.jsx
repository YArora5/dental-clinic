import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            We'd Love To
            <span> Hear From You</span>
          </h2>

          <p>
            Whether you have questions about treatments,
            appointments, or simply want to know more
            about our clinic, our team is always happy
            to help.
          </p>
        </motion.div>

        <div className="contact-content">

          {/* LEFT */}

          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="contact-card">
              <Phone size={24} />

              <div>
                <h4>Call Us</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>

            <div className="contact-card">
              <Mail size={24} />

              <div>
                <h4>Email</h4>
                <p>hello@lumadental.com</p>
              </div>
            </div>

            <div className="contact-card">
              <MapPin size={24} />

              <div>
                <h4>Address</h4>
                <p>123 Smile Street, New York, USA</p>
              </div>
            </div>

            <div className="contact-card">
              <Clock3 size={24} />

              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat | 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="map-box">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=New+York&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                <Send size={18} />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;