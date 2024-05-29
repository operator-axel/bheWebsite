"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ImagesSlider } from "./images-slider";
import PulsatingBorderButton from "./Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ImagesSliderFramer() {
  const images = [
    "/bhePf-3.jpeg",
    "/bhePf-4.jpeg",
    "/bhePf-5.jpeg",
    "/bhePf-6.jpeg",
    "/bhePf-7.jpeg",
  ];
  return (
    <RevealOnScroll>
      <ImagesSlider className="h-[50rem]" images={images} overlayClassName={""}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-40 flex flex-col justify-center items-center absolute inset-0 bg-black/60"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Protect Your Home with <br />
            Our Expert Roofing Services
          </motion.p>
          <Link href="/contact" legacyBehavior>
            <div className="hover:scale-125 transition-all ease-linear onClick:scale-90">
              <PulsatingBorderButton
                className={""}
                onClick={() => console.log("Button clicked!")}
              >
                Contact Us
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="ml-2 icon-animate"
                />
              </PulsatingBorderButton>
            </div>
          </Link>
        </motion.div>
      </ImagesSlider>
    </RevealOnScroll>
  );
}
