"use client";
import React from "react";
import { ThreeDCardDemo } from "@/components/ThreeD";
import Link from "next/link";
import PulsatingBorderButton from "@/components/ui/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export function GridBackgroundDemo() {
  return (
    <div className="h-fit w-full bg-black bg-opacity-20 bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
      <ThreeDCardDemo />
      <div className="w-full flex justify-center mb-16">
        <Link href="/contact">
          <div className="hover:scale-125 duration-200 ease-linear">
            <PulsatingBorderButton>
              Contact Us
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="ml-2 icon-animate"
              />
            </PulsatingBorderButton>
          </div>
        </Link>
      </div>
    </div>
  );
}
