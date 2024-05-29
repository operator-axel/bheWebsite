"use client";

import Image from "next/image";
import Solar from "../../public/modernsolar.png";
import RoofInstall from "../../public/shingleInstall.png";
import One from "../../public/sunset.png";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../../app/globals.css";

const RevealOnScroll = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight * 0.8; // Adjust this multiplier as needed
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const delay = index * 200; // 100ms delay per card

  const classes = `transition-transform-all  delay-[${delay}ms] translate-all duration-300
        ${
          isVisible
            ? "transition-all translate-all opacity-100 filter:blur(0px) translate-y-0 scale-100 ease-in-out"
            : "transition all translate-all opacity-0 filter:blur(5px) translate-y-56 scale-105"
        }`;

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
};

function Second() {
  const cards = [
    {
      image: One,
      title: "Roof Care",
      text: "Our dedicated team ensures the longevity of your roof, offering top-notch inspections, repairs, and maintenance services.",
      link: "/services/roofcare/",
    },
    {
      image: RoofInstall,
      title: "Roof Install",
      text: " From meticulous planning to flawless execution, trust us for quality craftmanship that stands the test of time.",
      link: "/services/roofinstall/",
    },
    {
      image: Solar,
      title: "Additional Services",
      text: "Beyond roofs, we offer a spectrum of additional services to enhance your home's protection and energy efficiency.",
      link: "/services/addserv/",
    },
  ];
  return (
    <div className="grid-cols-1 mb-36 sm:grid md:grid-cols-3 ">
      {cards.map((card, index) => (
        <RevealOnScroll key={index} index={index}>
          <div className="transition-all hover:scale-105 duration-300 ease-in-out  mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(109,104,108,0.77),0_10px_20px_-2px_rgba(0,0,0,0.04)] drop-shadow-lg sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <Image
                className="rounded-t-lg"
                src={card.image}
                alt={card.title}
              />
            </a>
            <div className="p-8">
              <h5 className="mb-2 text-center text-xl font-medium leading-tight text-gray-500">
                {card.title}
              </h5>
              <p className="text-gray-400">{card.text}</p>
            </div>
            <Link
              className=" self-center mb-6 inline-flex items-center justify-center rounded-xl bg-[#02c9ff] py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-[#02c9ff]/75  duration-300 ease-out transition-all hover:scale-125"
              href={card.link}
            >
              Read More
            </Link>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}

export default Second;
