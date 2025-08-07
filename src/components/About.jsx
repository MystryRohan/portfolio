import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  const anime = {
    initial: { opacity: 0, y: "-20%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };
  return (
    <div className="container about">
      <div className="me">
        <motion.h1 {...anime}>About Me</motion.h1>
        <motion.h5 {...anime}>
          I'm is a Passionate Full Stack Developer with a solid background in
          Computer Engineering. Experienced in building dynamic web applications
          and leveraging cutting-edge technologies to deliver innovative
          solutions. Proficient in Python, Java and JavaScript, with expertise
          in frameworks like Springboot, React.js and Express.js. Skilled in
          database management with MongoDB and MySQL.
        </motion.h5>
      </div>
      <motion.div className="skills" {...anime}>
        <h1>My Skills</h1>
        <div className="list">
          <div>
            <h3>Programming Language</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C/C++</li>
            </ul>
          </div>
          <div>
            <h3>Development</h3>
            <ul>
              <li>Springboot</li>
              <li>Express</li>
              <li>Node</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
            </ul>
          </div>
          <div>
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h3>Softwares/Tools</h3>
            <ul>
              <li>VSCode</li>
              <li>Postman</li>
              <li>Google Colab</li>
              <li>Figma</li>
              <li>Git</li>
              <li>NPM</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
