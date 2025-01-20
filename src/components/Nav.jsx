import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Magnetic from "./Magnetic";

const Nav = forwardRef(function Nav(props, ref) {
  const [showNav, setShowNov] = useState(false);

  const showNavHandler = () => {
    console.log("nav");
    setShowNov(!showNav);
  };

  return (
    <>
      <nav>
        <Magnetic>
          <div ref={ref} className="burger" onClick={showNavHandler}>
            <div className="bounds"></div>
          </div>
        </Magnetic>
      </nav>
      <AnimatePresence>
        {showNav && <Drawer showNavHandler={showNavHandler} />}
      </AnimatePresence>
    </>
  );
});

export default Nav;

const Drawer = ({ showNavHandler }) => {
  const anime = {
    // hidden: { right: -10 },
  };
  return (
    <motion.ul
      className="drawer"
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 60, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.li>
        <NavLink to={"/"} onClick={showNavHandler}>
          Home
        </NavLink>
      </motion.li>
      <motion.li>
        <NavLink to={"/about"} onClick={showNavHandler}>
          About
        </NavLink>
      </motion.li>
      {/* <motion.li>
        <NavLink to={"/contact"} onClick={showNavHandler}>
          Contact
        </NavLink>
      </motion.li> */}
    </motion.ul>
  );
};
{
  /* <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul> */
}
