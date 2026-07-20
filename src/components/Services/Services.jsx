import { motion } from "framer-motion";
import {
  Smile,
  Sparkles,
  ShieldCheck,
  ScanLine,
  HeartPulse,
  Syringe,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: <Smile size={34} />,
    title: "General Dentistry",
    description:
      "Routine checkups, fillings, cleanings and complete oral health care for every age.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter, healthier and confident smile.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Dental Implants",
    description:
      "Permanent and natural-looking tooth replacement with advanced implant technology.",
  },
  {
    icon: <ScanLine size={34} />,
    title: "Digital X-Ray",
    description:
      "Modern digital diagnostics for quick, safe and accurate treatment planning.",
  },
  {
    icon: <HeartPulse size={34} />,
    title: "Orthodontics",
    description:
      "Braces and clear aligners designed to straighten teeth comfortably.",
  },
  {
    icon: <Syringe size={34} />,
    title: "Painless Treatment",
    description:
      "Comfort-focused dental procedures using modern painless techniques.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">

      <div className="services-container">

        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Complete Dental Care
            <span> Under One Roof.</span>
          </h2>

          <p>
            From preventive dentistry to advanced cosmetic
            and restorative treatments, our experienced team
            provides personalized care using modern
            technology.
          </p>

        </motion.div>

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-btn">
                Learn More →
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;