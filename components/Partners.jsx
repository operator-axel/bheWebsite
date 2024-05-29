"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gafCert from "/public/GAF-Certified-Contractor-300x300.webp";

import One from "../public/partner/partners3.svg";
import Two from "../public/partner/partners1.svg";
import Three from "../public/partner/partners2.svg";
import Four from "../public/partner/partners4.svg";
import Five from "../public/partner/partners5.svg";
import Six from "../public/partner/partners6.svg";
import Seven from "../public/partner/partners7.svg";
import Eight from "../public/partner/partners8.svg";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Partners() {
  return (
    <RevealOnScroll>
      <h1 className="justify-center text-center text-5xl items-center text-white mb-12">
        Proud Partners
      </h1>
      <div className="mb-12">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="w-full transition-all inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_72px,_black_calc(100%-124px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none h-24 animate-infinite-scroll translate-all ease-in-out"
          >
            <li>
              <Image
                loading="lazy"
                src={One}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 2"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Two}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 3"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Three}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 4"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Four}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 5"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Five}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 6"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Six}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 7"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Seven}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 7"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Eight}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 8"
              />
            </li>
          </ul>

          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none h-24 animate-infinite-scroll"
          >
            <li>
              <Image
                loading="lazy"
                src={One}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 2"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Two}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 3"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Three}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 4"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Four}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 5"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Five}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 6"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Six}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 7"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Seven}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 7"
              />
            </li>
            <li>
              <Image
                loading="lazy"
                src={Eight}
                className="rounded-lg transition-all hover:scale-150"
                alt="Image 8"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-12 mb-24">
        <div className="bg-white rounded-lg p-4 bg-opacity-10 backdrop-blur-lg shadow-xl drop-shadow-xl hover:scale-125  transition-all duration-300 hover:-translate-y-2 border-slate-200 border-2">
          <Image
            src={gafCert}
            alt=""
            height={200}
            weight={200}
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </RevealOnScroll>
  );
}
