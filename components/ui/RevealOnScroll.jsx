"use client";

import React, { useState, useRef, useEffect } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-transform-all duration-1000
        ${
          isVisible
            ? "opacity-100 translate-all transition-transform-all translate-y-0 scale-100 ease-in-out"
            : "opacity-0 translate-all transition-transform-all translate-y-56 scale-105"
        }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
