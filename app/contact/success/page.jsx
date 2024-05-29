import React from "react";
import Image from "next/image";
import PulsatingBorderButton from "@/components/ui/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/public/3d2.png";

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 rounded-lg shadow-lg  backdrop-filter backdrop-blur-md bg-white bg-opacity-10 max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Success! 🎉
        </h1>
        <p className="text-white text-xl text-center mb-8">
          We got your message! <br />
          We&apos;ll get back to you shortly!
        </p>
        <div className="flex justify-center"></div>
        <Image src={Logo} alt="Logo"></Image>
        <div className="flex justify-center">
          <a href="/">
            <PulsatingBorderButton>
              Go back home
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="ml-2 icon-animate"
              />
            </PulsatingBorderButton>
          </a>
        </div>
      </div>
    </div>
  );
}
