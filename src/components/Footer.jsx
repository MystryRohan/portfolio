import { RxDoubleArrowUp } from "react-icons/rx";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <h1>Let's Connect</h1>
      <p>Try Karke Dekhte He</p>
      <p>© Rohan Mistry 2025</p>
      <div className="scroll-div scroll-div-footer">
        <RxDoubleArrowUp />
        <span className="scroll-down">Scroll up</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
