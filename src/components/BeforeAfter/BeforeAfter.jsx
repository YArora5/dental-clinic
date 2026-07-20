import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Smile,
} from "lucide-react";
import "./BeforeAfter.css";

const transformations = [
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Teeth Whitening",
  },
  {
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    title: "Smile Makeover",
  },
];

const BeforeAfter = () => {
  return (
    <section
      className="before-after"
      id="before-after"
    >

      <div className="before-container">

        <motion.div
          className="before-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="section-tag">
            BEFORE & AFTER
          </span>

          <h2>
            Real
            <span> Smile Transformations</span>
          </h2>

          <p>
            Every smile tells a story.
            Explore some of our successful
            dental treatments and cosmetic
            transformations.
          </p>

        </motion.div>

        <div className="before-grid">

          {transformations.map((item,index)=>(

            <motion.div
              key={index}
              className="before-card"
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                duration:.6,
                delay:index*.15
              }}
            >

              <div className="image-wrapper">

                <div className="image-box">

                  <img
                    src={item.before}
                    alt="Before"
                  />

                  <span className="label before">
                    BEFORE
                  </span>

                </div>

                <div className="image-box">

                  <img
                    src={item.after}
                    alt="After"
                  />

                  <span className="label after">
                    AFTER
                  </span>

                </div>

              </div>

              <div className="before-content">

                <h3>
                  {item.title}
                </h3>

                <div className="rating">

                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>

                  <span>5.0 Result</span>

                </div>

                <button>

                  View Case

                  <ArrowRight size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div
          className="smile-banner"
          initial={{opacity:0,scale:.95}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true}}
          transition={{duration:.7}}
        >

          <Smile size={34}/>

          <div>

            <h3>
              5000+ Beautiful Smiles Created
            </h3>

            <p>
              Trusted by families for quality
              dental care and lasting results.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default BeforeAfter;