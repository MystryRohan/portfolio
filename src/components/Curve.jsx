import { motion } from "framer-motion";
import "../styles/curve.css";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curveAnim = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.75, 0, 0, 0.25] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.75, 0, 0, 0.25] },
    },
  };

  return (
    <svg className="svg">
      <motion.path
        variants={curveAnim}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
      ></motion.path>
    </svg>
  );
};

export default Curve;
