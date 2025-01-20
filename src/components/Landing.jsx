import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Home from "./Home";
import Work from "./Work";

const Landing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <div className="container" ref={ref}>
        <div className="wrapper-landing">
          <motion.h1
            style={{ scale: scaleValue, opacity: opacityValue }}
            transition={{ duration: 0.8 }}
            className="landing-text"
          >
            Portfolio
          </motion.h1>
        </div>
      </div>
      <Home />
      <Work />
    </>
  );
};
export default Landing;
