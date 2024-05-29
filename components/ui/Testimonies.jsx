"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
            ? "opacity-100 translate-y-0 scale-100 ease-in-out"
            : "opacity-0 translate-y-56 scale-105"
        }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Testimonies() {
  return (
    <RevealOnScroll>
      <section id="testimonies" className="py-20 bg-slate-900 bg-opacity-0">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                <Link href="https://g.page/r/CdhB92u3i_mNEBM/review">
                  Google Reviews
                </Link>
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                It&apos;s not just us.
              </h1>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                Here&apos;s what others have to say about us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group hover:scale-110 ease-in-out duration-300">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="" className="cursor-pointer" legacyBehavior>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://lh3.googleusercontent.com/a-/ALV-UjXJqwszoKg5fW1tdIM1AQLTmCWf0g4Hj4SGMmtmPdrfrzMk=s50-c-mo"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="User Picture"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Domenic Rocco
                          </h3>
                          <p className="text-gray-500 text-md">
                            &#11088;&#11088;&#11088;&#11088;&#11088;
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Zac and his team are amazing! He was able to assess my
                        roof, provided me with fast service and an unbelievable
                        price! Thank you Zac and Blue Horizon roofing
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group hover:scale-110 ease-in-out duration-300">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="" className="cursor-pointer" legacyBehavior>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://lh3.googleusercontent.com/a-/ALV-UjW8RsoVrDtuScvmcUjccezk3YEML6COJcleDlwvmEYiWA=s50-c-mo"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="User Photo"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Austin Davis
                          </h3>
                          <p className="text-gray-500 text-md">
                            &#11088;&#11088;&#11088;&#11088;&#11088;
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Zac with Blue Horizon is excellent to deal with great
                        communication and punctual. Will definitely use them for
                        future projects. Highly recommend to anyone needing a
                        new roof.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group hover:scale-110 ease-in-out duration-300">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocJYPMqa8EfwwTU0ezYpP3l-V7iCMU2WyVHsKF39J7Fk=s50-c-mo"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="User Photo"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Michelle Sisko
                        </h3>
                        <p className="text-gray-500 text-md">
                          &#11088;&#11088;&#11088;&#11088;&#11088;
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      My new house had an a leaking roof and my builder&apos;s
                      workmanship warranty expired. Zac and team didn&apos;t
                      hesitate to come and check to see what the issue was and
                      quickly resolved the problem. Matched the shingles and
                      all! Highly recommend Blue Horizon Roofing & Exteriors.
                      Very professional and excellent service. Hands down the
                      best contractor I&apos;ve dealt with.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group hover:scale-110 ease-in-out duration-300">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocKbSmwj4nXRZfTKWq405AiNay-Lnk4qyKjc2HsWNqXf=s50-c-mo"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="User Photo"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          John Kratz
                        </h3>
                        &#11088;&#11088;&#11088;&#11088;&#11088;
                        <p className="text-gray-500 text-md"></p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      Had a wonderful experience with Blue Horizon Exteriors!
                      Zac effectively problem solved the issue, provided a
                      realistic solution, communicated timelines, and offered a
                      fair and reasonable price. Would recommend Blue Horizon
                      Exteriors to anyone looking for an ethical experience for
                      their exterior needs. I can’t express the piece of mind I
                      have knowing that there is a company with proper business
                      ethics, that I can goto for any exterior problems.
                      Thankyou Zac!
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group hover:scale-110 ease-in-out duration-300">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-red-600 to-orange-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://lh3.googleusercontent.com/a-/ALV-UjW3pNqWIKZyOSw4xXGErgFwHgFUOSkYzmJ049M9v93oZ04=w60-h60-p-rp-mo-br100"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="User Photo"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Deena Berberich
                        </h3>
                        &#11088;&#11088;&#11088;&#11088;&#11088;
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      Zac and his team just wrapped up a complete roof
                      replacement for us and we couldn’t be happier with the
                      exceptional service he provided. Zac is reliable, honest
                      and a true professional. He answered all of our questions,
                      and kept us informed every step of the way. He and his
                      team arrived on time, took great care of our property, and
                      worked diligently to complete our job in a timely manner.
                      We highly recommend Zac and his team at Blue Horizon
                      Exteriors to anyone in need of roofing services. Their
                      professionalism, and commitment to excellence made them a
                      great choice for us. Thank you, Zac and team for a job
                      well done!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
