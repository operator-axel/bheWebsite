"use client";

import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-6 bg-slate-950 backdrop-blur-md bg-opacity-10 text-gray-200 relative z-10">
      <div className="container px-4 sm:px-6 mx-auto space-y-6 divide-y divide-gray-200 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-6">
            <Link
              rel="noopener noreferrer"
              href="/"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div
                className="flex items-center transition-all ease-linear hover:-translate-y-1 justify-center w-12 h-12 rounded-full bg-white bg-opacity-10 drop-shadow-xl shadow-xl"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="28px"
                  viewBox="0 0 24 24"
                  width="28px"
                  fill="#02c9ff"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M13,18h-2v-2h2V18z M15,14H9v6h6V14L15,14z M19,9.3L19,9.3V4h-3v2.6v0L12,3L2,12h3l7-6.31L19,12h3L19,9.3z" />
                </svg>
              </div>
              <span className="self-center drop-shadow-xl text-2xl font-semibold">
                Blue Horizon Roofing & Exteriors
              </span>
            </Link>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-3 text-center sm:text-left">
            <p className="pb-1 text-lg font-semibold">Links</p>
            <ul>
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="/about"
                  className="hover:text-[#02c9ff]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="/services"
                  className="hover:text-[#02c9ff]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="/blog"
                  className="hover:text-[#02c9ff]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="/contact"
                  className="hover:text-[#02c9ff]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-[#02c9ff]"
                ></Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-3 text-center sm:text-left">
            <p className="pb-1 text-lg font-semibold">Our Contact</p>
            <ul className="space-y-2">
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-[#02c9ff] inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#02c9ff"
                    className="mr-4"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                  </svg>
                  (941)212-8121
                </Link>
              </li>
              <li className="break-words">
                <Link
                  rel="noopener noreferrer"
                  href="mailto:info@bluehorizonexteriors.com"
                  className="hover:text-[#02c9ff] inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#02c9ff"
                    className="mr-4"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                  info@bluehorizonexteriors.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2024 Blue Horizon Roofing & Exteriors</span>
            <Link rel="noopener noreferrer" href="/privacy">
              <span>Privacy policy</span>
            </Link>
            <Link rel="noopener noreferrer" href="#">
              <span className="hover:text-bheBlue">License - CCC1335200</span>
            </Link>
          </div>
          <div className="flex transition-all ease-out justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <Link
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=61554519915322"
              title="Facebook"
              className="hover:scale-125  hover:bg-opacity-0 hover:color-white hover:ease-linear hover:bg-color-[#02c9ff] bg-white duration-200 flex items-center justify-center w-10 h-10 rounded-full dark:bg-white  dark:text-gray-900 shadow-gray-900 transition-all hover:shadow-[#02c9ff] hover:shadow-xl shadow-md drop-shadow-2xl lg:mr-[100px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                fill="#02c9ff"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
