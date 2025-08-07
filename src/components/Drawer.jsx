import { motion } from "framer-motion";
import { menuSlide } from "../anim/anim.js";
import { slide } from "../anim/anim.js";
import { NavLink } from "react-router-dom";
import Curve from "./Curve";
import { CgClose, CgInstagram } from "react-icons/cg";
import "../styles/drawer.css";

const Drawer = ({ showNavHandler }) => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];
  return (
    <motion.div
      className="menu"
      variants={menuSlide}
      animate={"enter"}
      exit={"exit"}
      initial={"initial"}
      onClick={() => showNavHandler()}
    >
      <CgClose className="close-menu" size={25} />
      <div>
        <p>Navigation</p>
        <div className="line"></div>
      </div>
      <div className="nav">
        {navItems.map((item, idx) => (
          <motion.div
            variants={slide}
            animate={"enter"}
            exit={"exit"}
            initial={"initial"}
          >
            <NavLink to={item.href}>{item.title}</NavLink>
          </motion.div>
        ))}
      </div>
      <div className="socials">
        <CgInstagram />
        <p>Instagram</p>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Drawer;
