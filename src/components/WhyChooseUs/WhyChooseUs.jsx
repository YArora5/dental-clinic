import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import "./WhyChooseUs.css";

const features = [
  "Experienced & Certified Dentists",
  "Modern Dental Technology",
  "Pain-Free Treatment",
  "Affordable Pricing",
  "Emergency Dental Care",
  "Friendly & Caring Staff",
];

const stats = [
  {
    value: "15+",
    label: "Expert Dentists",
  },
  {
    value: "5000+",
    label: "Happy Patients",
  },
  {
    value: "99%",
    label: "Patient Satisfaction",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why" id="why">

      <div className="why-container">

        {/* LEFT */}

        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2>
            We Make Every
            <span> Smile Healthier </span>
            & Brighter.
          </h2>

          <p>
            Our clinic combines experienced dentists,
            cutting-edge technology, and compassionate care
            to provide exceptional dental treatment for
            children and adults in a comfortable environment.
          </p>

          <div className="why-features">

            {features.map((item, index) => (

              <div
                className="why-feature"
                key={index}
              >

                <CheckCircle2 size={20} />

                <span>{item}</span>

              </div>

            ))}

          </div>

          <div className="why-bottom">

            <div className="why-badge">

              <ShieldCheck size={24} />

              <div>

                <h4>Trusted Dental Care</h4>

                <p>Safe • Hygienic • Professional</p>

              </div>

            </div>

            <button className="why-btn">

              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="why-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="why-image-box">

            <img
              src="/images/why.jpg"
              alt="Dental Treatment"
              className="why-image"
            />

            <div className="quality-card">

              <BadgeCheck size={24} />

              <div>

                <h4>Premium Care</h4>

                <span>Advanced Equipment</span>

              </div>

            </div>

          </div>

          <div className="why-stats">

            {stats.map((item, index) => (

              <div
                className="why-stat"
                key={index}
              >

                <HeartHandshake size={22} />

                <h3>{item.value}</h3>

                <span>{item.label}</span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;