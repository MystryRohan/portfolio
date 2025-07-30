import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Landing from "./components/Landing";
// import Home from "./components/Home";
// import Work from "./components/work";
import Footer from "./components/Footer";
import About from "./components/About";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Drawer from "./components/Drawer";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const stickyElement = useRef(null);
  const [showNav, setShowNov] = useState(false);
  const showNavHandler = () => {
    // console.log("nav");
    setShowNov(!showNav);
  };
  return (
    <ReactLenis root lerp={0.5}>
      <Router>
        <Nav ref={stickyElement} showNavHandler={showNavHandler} />
        <Cursor stickyElement={stickyElement} />
        <AnimatePresence mode="wait">
          {showNav && <Drawer showNavHandler={showNavHandler} />}
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
