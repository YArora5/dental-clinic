import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section
      className="appointment"
      id="appointment"
    >

      <div className="appointment-container">

        {/* LEFT */}

        <motion.div
          className="appointment-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="section-tag">
            BOOK APPOINTMENT
          </span>

          <h2>
            Schedule Your
            <span> Dental Visit</span>
          </h2>

          <p>
            Book an appointment with our experienced
            dentists and receive personalized dental
            care using the latest technology in a
            comfortable environment.
          </p>

          <div className="appointment-info">

            <div className="info-card">

              <CalendarDays size={22}/>

              <div>

                <h4>Working Days</h4>

                <span>Monday - Saturday</span>

              </div>

            </div>

            <div className="info-card">

              <Clock3 size={22}/>

              <div>

                <h4>Working Hours</h4>

                <span>9:00 AM - 8:00 PM</span>

              </div>

            </div>

            <div className="info-card">

              <Phone size={22}/>

              <div>

                <h4>Call Us</h4>

                <span>+1 234 567 890</span>

              </div>

            </div>

            <div className="info-card">

              <Mail size={22}/>

              <div>

                <h4>Email</h4>

                <span>hello@lumadental.com</span>

              </div>

            </div>

            <div className="info-card">

              <MapPin size={22}/>

              <div>

                <h4>Clinic</h4>

                <span>New York, USA</span>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="appointment-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <form>

            <div className="input-group">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-group">

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="date"
              />

            </div>

            <select>

              <option>
                Select Treatment
              </option>

              <option>
                Teeth Whitening
              </option>

              <option>
                Dental Implant
              </option>

              <option>
                Smile Makeover
              </option>

              <option>
                Orthodontics
              </option>

              <option>
                General Checkup
              </option>

            </select>

            <textarea
              rows="5"
              placeholder="Additional Notes"
            ></textarea>

            <button type="submit">
              Book Appointment
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Appointment;