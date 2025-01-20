import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useMotionTemplate,
} from "motion/react";
import { useRef } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, -15, -15]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0]);

  const opacityValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.75]);

  const transform = useMotionTemplate`translateY(${y}%)`;
  const transformX = useMotionTemplate`translateY(${y2}%)`;

  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <motion.div className="container home" ref={ref}>
      <motion.img
        src="me_alt.png"
        alt="me.png"
        style={{ opacity: opacityValue }}
      />
      <motion.h1 style={{ transform }}>Rohan</motion.h1>
      <div className="side-section">
        <motion.div className="content left" style={{ transform: transformX }}>
          <p>
            Hi I'm Rohan Mistry, A passionate Software Developer based in
            Mumbai.
          </p>
          <div className="links">
            <a href="https://github.com/MystryRohan" target="blank">
              Github
            </a>{" "}
            <span>/</span>
            <a href="https://linkedin.com/in/mistryrohan" target="blank">
              LinkedIn
            </a>
            <span>/</span>
            <a href="https://leetcode.com/u/rohanmistry/" target="blank">
              Leetcode
            </a>
          </div>
        </motion.div>

        <div className="content scroll-div">
          <span className="scroll-down">Scroll Down</span>
          <RxDoubleArrowDown />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
