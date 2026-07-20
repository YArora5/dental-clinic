import { motion } from "framer-motion";
import {
  Star,
  Quote,
} from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    image: "/images/patient1.jpg",
    name: "Sophia Williams",
    role: "Teeth Whitening",
    review:
      "Amazing experience! The dentists were incredibly professional and made me feel comfortable throughout the treatment. My smile has never looked better.",
  },
  {
    image: "/images/patient2.jpg",
    name: "James Anderson",
    role: "Dental Implant",
    review:
      "Excellent service and modern equipment. The entire team was friendly, caring, and explained every step clearly. Highly recommended!",
  },
  {
    image: "/images/patient3.jpg",
    name: "Emma Johnson",
    role: "Smile Makeover",
    review:
      "I was nervous before my procedure, but the staff made everything stress-free. The results exceeded my expectations. Thank you Luma Dental!",
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      id="testimonials"
    >

      <div className="testimonials-container">

        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="section-tag">
            TESTIMONIALS
          </span>

          <h2>
            What Our
            <span> Patients Say.</span>
          </h2>

          <p>
            Thousands of happy patients trust
            Luma Dental for comfortable,
            professional, and high-quality
            dental care.
          </p>

        </motion.div>

        <div className="testimonial-grid">

          {testimonials.map((item,index)=>(

            <motion.div
              key={index}
              className="testimonial-card"
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                duration:.6,
                delay:index*.15
              }}
            >

              <Quote
                size={40}
                className="quote-icon"
              />

              <div className="stars">

                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="patient">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;