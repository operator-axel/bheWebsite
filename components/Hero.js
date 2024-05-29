"use client";

import React from "react";
import Image from "next/image";
import Logo from "../public/3d2.png";
import Arrow from "../components/ui/Arrows";

function Header() {
  return (
    <div className="flex flex-col units text-center items-center justify-center h-dvh max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8 pt-24">
      <div className="max-w-xl mb-12 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
        <h1 className="font-semibold text-5xl">
          Protecting your{" "}
          <span className="text-red-700 custom-home-text ">home.</span>
          <br />
          Elevating your view.
        </h1>
      </div>
      <Image
        src={Logo}
        className="w-full floating mb-24 mx-auto md:w-auto md:max-w-xs saturate-150 ease-linear transition-all hover:-translate-y-3 duration-300"
        alt=""
      />
      <Arrow />
    </div>
  );
}
export default Header;
