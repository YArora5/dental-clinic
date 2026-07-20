import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      <div className="loader-content">

        <motion.div
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        >
          <div className="loader-circle"></div>
        </motion.div>

        <motion.h1
          className="loader-logo"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          Luma
          <span>Dental</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          Creating Beautiful Smiles...
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;