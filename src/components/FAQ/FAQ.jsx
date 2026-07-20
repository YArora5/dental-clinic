import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    question: "How often should I visit a dentist?",
    answer:
      "We recommend visiting every six months for a routine dental check-up and professional cleaning to maintain healthy teeth and gums.",
  },
  {
    question: "Do you provide emergency dental treatment?",
    answer:
      "Yes. We offer emergency dental care for severe tooth pain, broken teeth, infections, and other urgent dental problems.",
  },
  {
    question: "Are dental treatments painful?",
    answer:
      "Modern technology and gentle techniques allow us to perform most treatments with minimal discomfort. We always prioritize patient comfort.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. We work with many insurance providers. Please contact our clinic to confirm your specific insurance coverage.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Professional teeth whitening usually lasts between one and three years depending on your oral hygiene and eating habits.",
  },
  {
    question: "Can children receive treatment at your clinic?",
    answer:
      "Absolutely! We provide child-friendly dental care in a comfortable environment to help young patients feel relaxed.",
  },
];

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section className="faq" id="faq">

      <div className="faq-container">

        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Find answers to the most common
            questions about our treatments,
            appointments and dental care.
          </p>

        </motion.div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <motion.div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              layout
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                {activeIndex === index ? (
                  <Minus size={22} />
                ) : (
                  <Plus size={22} />
                )}

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    className="faq-answer"
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:"auto",
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                    transition={{
                      duration:.35
                    }}
                  >

                    <p>{item.answer}</p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default FAQ;