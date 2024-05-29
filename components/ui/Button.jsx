"use client";
import React, { useState } from "react";

const PulsatingBorderButton = ({ children, onClick, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (typeof onClick === "function") {
      onClick();
    }
    setTimeout(() => setIsClicked(false), 200);
  };
  const buttonClasses = `inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${className}`;

  const buttonStyle = {
    display: "inline-flex",
    height: "3rem", // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem", // Equivalent to rounded-md in TailwindCSS
    border: "2px solid rgba(250, 250, 250, 0.3)", // Initial border color
    background: "linear-gradient(135deg, #02c9ff 0%, #0078ff 100%)", // New gradient
    backgroundSize: "200% 100%",
    padding: "0 1.5rem", // Adjust the padding as needed
    fontWeight: "medium",
    backdropFilter: "blur(5px)",
    color: "#ffffff", // Ensuring text contrast
    transition: "all 0.2s ease-out",
    outline: "none",
    cursor: "pointer",
    animation: "pulsate 5.5s ease-in-out infinite",
    userSelect: "none",
    transform: isClicked ? "scale(0.8)" : "scale(1)",
    transition: "transform 300ms ease, background 0.5s ease", // Smooth transition for hover effects
  };

  const pulsatingKeyframes = `@keyframes pulsate {
    0%, 100% {
      border-color: #02c9ff ;
    }
    50% {
      border-color: #ffffff;
    }
  }`;

  return (
    <>
      <style>{pulsatingKeyframes}</style>
      <button
        style={buttonStyle}
        onClick={handleClick}
        className={`button-hover-animate ${className || ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default PulsatingBorderButton;
