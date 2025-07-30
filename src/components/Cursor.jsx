import { animate, transform } from "motion";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Cursor = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 20;
  const cursorRef = useRef();

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const springOptions = { stiffness: 300, mass: 0.5, damping: 20 };
  const smoothMouse = {
    x: useSpring(mouse.x, springOptions),
    y: useSpring(mouse.y, springOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { top, left, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (isHovered) {
      rotate(distance);

      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
    // console.log("hover");
  };
  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" }
    );
  };

  useEffect(() => {
    // console.log(isHovered);
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  });
  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  return (
    <motion.div
      ref={cursorRef}
      className="cursor"
      transformTemplate={template}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};
export default Cursor;
