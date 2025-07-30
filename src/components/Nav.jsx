import { forwardRef } from "react";
import Magnetic from "./Magnetic";
import "../styles/nav.css";

const Nav = forwardRef(function Nav(props, ref) {
  const { showNavHandler } = props;
  return (
    <>
      <nav>
        <Magnetic>
          <div ref={ref} className="burger" onClick={() => showNavHandler()}>
            <div className="bounds"></div>
          </div>
        </Magnetic>
      </nav>
    </>
  );
});

export default Nav;
