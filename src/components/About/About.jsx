import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Smile,
  HeartHandshake,
} from "lucide-react";
import "./About.css";

const features = [
  "Experienced & Certified Dentists",
  "Advanced Digital Equipment",
  "Comfortable & Painless Treatment",
  "Affordable Dental Care",
];

const stats = [
  {
    icon: <Award size={24} />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <Smile size={24} />,
    value: "5000+",
    label: "Happy Patients",
  },
  {
    icon: <HeartHandshake size={24} />,
    value: "98%",
    label: "Success Rate",
  },
];

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="about-image-box">

            <img
              src="/images/about.jpg"
              alt="Dental Clinic"
              className="about-image"
            />

            <div className="experience-card">
              <h2>10+</h2>
              <span>Years of Excellence</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            ABOUT OUR CLINIC
          </span>

          <h2>
            Your Trusted Partner
            <span> For A Healthier Smile.</span>
          </h2>

          <p>
            At Luma Dental, we combine modern technology,
            experienced professionals, and personalized
            treatment plans to deliver exceptional dental
            care. Our goal is to make every visit
            comfortable, stress-free, and focused on
            creating beautiful, healthy smiles.
          </p>

          <div className="about-features">

            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item"
              >
                <CheckCircle2 size={20} />
                <span>{feature}</span>
              </div>
            ))}

          </div>

          <div className="about-stats">

            {stats.map((item, index) => (
              <div
                key={index}
                className="about-stat-card"
              >

                <div className="stat-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>

              </div>
            ))}

          </div>

          <button className="about-btn">
            Learn More
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default About;