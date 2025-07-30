import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
const WorkO = () => {
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const transform = useMotionTemplate`translateX(${x}%)`;
  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <div className="container work" ref={ref}>
      <motion.div className="section" style={{ transform }}>
        <h1 className="heading">Cooked</h1>
        <h3 className="subtext">Recently Cooked Websites</h3>
      </motion.div>

      {projects.map((project, idx) => (
        <motion.div
          style={{ width: "100%" }}
          initial={{ y: 20, x: -20, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          key={idx}
          className="work-tile-container"
        >
          <WorkTile
            idx={idx}
            name={project.name}
            category={project.category}
            link={project.link}
            animation={transform}
          />
        </motion.div>
      ))}
      <motion.div
        className="section"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <h3 className="subtext there-more">There's more</h3>
        <a
          href="https://github.com/MystryRohan?tab=repositories"
          target="blank"
          className="all-proj-link"
        >
          View All Projects
          <RiExternalLinkLine />
        </a>
      </motion.div>
    </div>
  );
};
export default WorkO;

const WorkTile = ({ idx, name, link, category }) => {
  const anime = {
    hidden: {
      opacity: 0,
    },
    bg: {
      backgroundColor: "#f9f9f9",
    },
    hover: {
      height: "15rem",
      backgroundColor: "#fff",
      transition: {
        type: "tween",
        ease: "easeIn",
      },
    },
    hoverPreview: {
      scale: 1.1,
    },
  };
  return (
    <motion.div
      className="work-tile"
      initial="bg"
      whileHover="hover"
      variants={anime}
    >
      <div className="title-div">
        {/* <div>
          
          {/* <motion.span>{idx + 1}</motion.span> */}
        {/* </div> */}
        <h5 className="number">{idx + 1}.</h5>
        <div className="title">
          <h4>{name}</h4>
          <p>{category}</p>
        </div>
      </div>
      <motion.div className="preview">
        <motion.a
          className="a-link"
          target="blank"
          href={link}
          whileHover="hoverPreview"
          variants={anime}
        >
          View Project <RiExternalLinkLine />{" "}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
