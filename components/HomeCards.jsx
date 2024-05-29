"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import img1 from "@/public/dalleInstall.webp";
import img2 from "@/public/cartoonInstall.webp";
import img3 from "@/public/dalleSolar.webp";
import PulsatingBorderButton from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const RevealOnScroll = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight * 0.8;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseClasses = "transition-all duration-300 ease-linear transform";
  const visibleClasses = "opacity-100 translate-x-0 scale-100";
  const hiddenClasses = "opacity-0 translate-x-90 scale-105 filter blur(4px)";
  const classes = `${baseClasses} ${
    isVisible ? visibleClasses : hiddenClasses
  }`;

  const style = {
    transitionDelay: `${index * 200}ms`,
  };

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
};

// Redefine the Card component
const Card = ({ title, description, imageSrc, imageAlt, readMoreLink }) => (
  <CardContainer className="">
    <CardBody className="bg-opacity-15 grid group/card hover:shadow-2xl hover:shadow-gray-500/[0.9] bg-white border-white/[0.9] w-auto sm:w-auto h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="160"
        className="text-2xl drop-shadow-xl font-bold text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="120"
        className="text-md max-w-sm mt-2 text-slate-700"
      >
        {description}
      </CardItem>
      <CardItem translateZ="180" className="w-full mb-8 mt-4">
        <Image
          src={imageSrc}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
          alt={imageAlt}
          priority // This ensures the image is preloaded
        />
      </CardItem>
      <CardItem translateZ="120">
        <Link href={readMoreLink}>
          <div className="text-left animate-shimmer hover:scale-125 transition-all ease-linear">
            <PulsatingBorderButton>
              Read More
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="ml-2 icon-animate"
              />
            </PulsatingBorderButton>
          </div>
        </Link>
      </CardItem>
    </CardBody>
  </CardContainer>
);

export function TdHomeCards() {
  const cards = [
    {
      title: "Roof Care",
      description:
        "Our dedicated team ensures the longevity of your roof, offering top-notch inspections, repairs, and maintenance services.",
      imageSrc: img1,
      imageAlt: "Solar Image",
      readMoreLink: "/services/roofcare",
    },
    {
      title: "Roof Install",
      description:
        "From meticulous planning to flawless execution, trust us for quality craftsmanship that stands the test of time.",
      imageSrc: img2,
      imageAlt: "Gutters Image",
      readMoreLink: "/services/roofinstall",
    },
    {
      title: "Additional Services",
      description:
        "Beyond roofs, we offer a spectrum of additional services to enhance your home's protection and energy efficiency.",
      imageSrc: img3,
      imageAlt: "Soffit Diagram",
      readMoreLink: "/services/addserv",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mx-2 place-items-center gap-4">
      {cards.map((card, index) => (
        <RevealOnScroll key={index} index={index}>
          <Card {...card} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
