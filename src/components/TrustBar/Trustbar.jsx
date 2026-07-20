import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Stethoscope,
} from "lucide-react";
import "./TrustBar.css";

const trustItems = [
  {
    icon: <ShieldCheck size={28} />,
    title: "100% Safe Care",
    description: "Advanced sterilization & hygiene standards.",
  },
  {
    icon: <Award size={28} />,
    title: "Certified Experts",
    description: "Highly experienced dental specialists.",
  },
  {
    icon: <Users size={28} />,
    title: "5000+ Patients",
    description: "Trusted by thousands of happy families.",
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Modern Equipment",
    description: "Latest technology for painless treatment.",
  },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">

      <div className="trust-container">

        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            className="trust-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >

            <div className="trust-icon">
              {item.icon}
            </div>

            <div className="trust-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default TrustBar;