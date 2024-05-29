"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import PulsatingBorderButton from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export function LampDemo() {
  return (
    <div>
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 mb-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Unveiling a Brighter Future: <br />
          Solar Power Now at Your Rooftop!
        </motion.h2>
        <Link href="/contact">
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
      </LampContainer>
    </div>
  );
}
