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
import { useRef } from "react";
function App() {
  const stickyElement = useRef(null);

  return (
    <div>
      <ReactLenis root lerp={0.5}>
        <Router>
          <Nav ref={stickyElement} />
          <Cursor stickyElement={stickyElement} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </ReactLenis>
    </div>
  );
}

export default App;
