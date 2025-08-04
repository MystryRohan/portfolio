import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaCodeBranch,
  FaCodeCommit,
  FaCodePullRequest,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import "../styles/work.css";
import WorkO from "./WorkO";
import { SiSpring, SiSpringboot } from "react-icons/si";

const Work = () => {
  const projects = [
    {
      name: "tracMon",
      category: "MERN Stack",
      link: "https://tracmon.vercel.app/",
    },
    {
      name: "GreenWheels",
      category: "MERN Stack",
      link: "https://greenwheels-fe.vercel.app/",
    },
    {
      name: "Zippa",
      category: "MERN Stack",
      link: "https://zippa-fe.vercel.app/",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const isMobile = window.screen.width > 480;

  return (
    <>
      <div ref={containerRef} className="enlarged-div">
        <div className="fixed-div">
          <motion.div key={1} className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaReact size={isMobile ? "4rem" : "2rem"} color="#61DBFB" />
            </div>
          </motion.div>
          <motion.div key={2} className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaPython size={isMobile ? "4rem" : "2rem"} color="#4584b6" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaCss3 size={isMobile ? "4rem" : "2rem"} color="#1572B6" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaNode size={isMobile ? "4rem" : "2rem"} color="#339933" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaJava size={isMobile ? "4rem" : "2rem"} color="#f89820" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <SiSpring size={isMobile ? "4rem" : "2rem"} color="#6db33f" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaHtml5 size={isMobile ? "4rem" : "2rem"} color="#E34C26" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaCode size={isMobile ? "4rem" : "2rem"} color="#fff" />
            </div>
          </motion.div>
          <motion.div className="wrapper" style={{ scale: scale4 }}>
            <div className="skills-image">
              <FaJs size={isMobile ? "4rem" : "2rem"} color="#F0DB4F" />
            </div>
          </motion.div>
        </div>
      </div>
      <WorkO />
    </>
  );
};

export default Work;

/**

 <motion.div style={{ scale: scale4 }}>
          <div className="skills-images">
            <FaReact size={"4rem"} color="#61DBFB" />
          </div>
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaPython size={"4rem"} color="#4584b6" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaCss3 size={"4rem"} color="#1572B6" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaNode size={"4rem"} color="#339933" />
        </motion.div>

        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaJava size={"4rem"} color="#f89820" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaDatabase size={"4rem"} color="#00758F" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaHtml5 size={"4rem"} color="#E34C26" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaCode size={"4rem"} color="#000" />
        </motion.div>
        <motion.div className="skills-images" style={{ scale: scale4 }}>
          <FaJs size={"4rem"} color="#F0DB4F" />
        </motion.div>
 */
