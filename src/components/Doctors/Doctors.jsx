import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Doctors.css";

const doctors = [
  {
    image: "/images/doctor1.jpg",
    name: "Dr. Sarah Johnson",
    role: "Chief Dental Surgeon",
  },
  {
    image: "/images/doctor2.jpg",
    name: "Dr. Michael Brown",
    role: "Orthodontist",
  },
  {
    image: "/images/doctor3.jpg",
    name: "Dr. Emily Carter",
    role: "Cosmetic Dentist",
  },
];

const Doctors = () => {
  return (
    <section className="doctors" id="doctors">

      <div className="doctors-container">

        <motion.div
          className="doctors-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-tag">
            OUR TEAM
          </span>

          <h2>
            Meet Our
            <span> Dental Experts.</span>
          </h2>

          <p>
            Our experienced specialists are committed to
            providing comfortable, modern, and personalized
            dental care for every patient.
          </p>

        </motion.div>

        <div className="doctors-grid">

          {doctors.map((doctor, index) => (

            <motion.div
              key={index}
              className="doctor-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >

              <div className="doctor-image-box">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />

                <div className="doctor-social">

                  <a href="#">
                    <FaFacebook size={18} />
                  </a>

                  <a href="#">
                    <FaInstagram size={18} />
                  </a>

                  <a href="#">
                    <FaLinkedin size={18} />
                  </a>

                </div>

              </div>

              <div className="doctor-info">

                <h3>{doctor.name}</h3>

                <span>{doctor.role}</span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Doctors;