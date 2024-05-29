"use client";

import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Logo from "../public/1500x1500.png";
import Image from "next/image";
import Link from "next/link";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>;

function MobileNav({
  open,
  setOpen,
  aboutMenuOpen,
  setAboutMenuOpen,
  servicesMenuOpen,
  setServicesMenuOpen,
}) {
  const toggleAboutMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutMenuOpen(!aboutMenuOpen);
    if (aboutMenuOpen) {
      setServicesMenuOpen(false);
    }
  };
  const toggleServicesMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesMenuOpen(!servicesMenuOpen);
    if (servicesMenuOpen) {
      setAboutMenuOpen(false);
    }
  };
  const closeAllMenus = () => {
    setOpen(false);
    setServicesMenuOpen(false); // Ensure this function can handle direct open/close state
    setAboutMenuOpen(false); // Ensure this function can handle direct open/close state
  };

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white bg-opacity-90 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md z-50 ${
        open ? "visible" : "invisible"
      }`}
      style={{ pointerEvents: open ? "all" : "none" }}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            toggleAboutMenu();
          }}
        ></Link>
        <div className="flex items-center">
          <Link
            href="/about"
            className="text-xl font-normal transition-all my-4 hover:text-[#02c9ff] hover:scale-105  hover:transition-all hover:translate-x-3 duration-200 ease-linear block"
            onClick={closeAllMenus}
          >
            About
          </Link>
          <div id="dropdown-trigger" onClick={(e) => toggleAboutMenu(e)}>
            <span
              className={`caret-dropdown ml-2 ${aboutMenuOpen ? "active" : ""}`}
            ></span>
          </div>
        </div>
        <div
          className={`ml-6 transition-transform rotateMenu ${
            aboutMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/about/portfolio"
            className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-110 hover:translate-x-3 hover:transition duration-300 block"
            onClick={closeAllMenus}
          >
            Portfolio
          </Link>
          <Link
            href="/about/ourteam"
            className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-110 hover:translate-x-3 hover:transition duration-300 block"
            onClick={closeAllMenus}
          >
            Our Team
          </Link>
        </div>
        <div
          className="text-xl font-normal my-4"
          href="/services"
          onClick={closeAllMenus}
        >
          <div className="flex items-center">
            <Link
              href="/services"
              className="hover:text-[#02c9ff] transition-all ease-linear hover:scale-105  hover:translate-x-3 duration-200 block"
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <div id="dropdown-trigger" onClick={(e) => toggleServicesMenu(e)}>
              <span
                className={`caret-dropdown ml-2 ${
                  servicesMenuOpen ? "active" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
        <div
          className={`ml-6 transition-transform rotateMenu ${
            servicesMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/services/roofcare"
            className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-110 hover:translate-x-3 hover:transition duration-300 block"
            onClick={closeAllMenus}
          >
            Roof Care
          </Link>
          <Link
            href="/services/roofinstall"
            className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-110 hover:translate-x-3 hover:transition duration-300 block"
            onClick={closeAllMenus}
          >
            Roof Install
          </Link>
          <Link
            href="/services/addserv"
            className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-110 hover:translate-x-3 hover:transition duration-300 block"
            onClick={closeAllMenus}
          >
            Additional Services
          </Link>
        </div>
        <Link
          className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-105 hover:translate-x-5 hover:transition duration-300 block"
          href="/contact"
          onClick={closeAllMenus}
        >
          Contact
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:text-[#02c9ff] transition-all ease-linear hover:scale-105 hover:translate-x-5 hover:transition duration-300 block"
          href="/blog"
          onClick={closeAllMenus}
        >
          Blog
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
    if (!servicesMenuOpen) setAboutMenuOpen(false);
  };

  useEffect(() => {
    if (servicesMenuOpen) {
      setAboutMenuOpen(false);
    }
  }, [servicesMenuOpen]);

  useEffect(() => {
    if (aboutMenuOpen) {
      setServicesMenuOpen(false);
    }
  }, [aboutMenuOpen]);

  // Detect screen size to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [wasAboutOpen, setWasAboutOpen] = useState(false);

  const toggleAboutMenu = () => {
    setWasAboutOpen(aboutMenuOpen);
    setAboutMenuOpen(!aboutMenuOpen);
    if (!aboutMenuOpen) setServicesMenuOpen(false);
  };

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(""); // Close the menu if the same menu is clicked again
    } else {
      setActiveMenu(menuName); // Open the clicked menu and close others
    }
  };

  const closeAllMenus = () => {
    setOpen(false);
    setServicesMenuOpen(false); // Ensure this function can handle direct open/close state
    setAboutMenuOpen(false); // Ensure this function can handle direct open/close state
  };

  return (
    <nav className="flex sticky top-0 drop-shadow-md px-4 py-4 h-20 items-center backdrop-filter backdrop-blur-xl bg-slate-950 bg-opacity-30 z-50">
      <MobileNav
        open={open}
        setOpen={setOpen}
        servicesMenuOpen={servicesMenuOpen}
        toggleServicesMenu={toggleServicesMenu}
        aboutMenuOpen={aboutMenuOpen}
        setAboutMenuOpen={setAboutMenuOpen}
        setServicesMenuOpen={setServicesMenuOpen}
      />

      <div className="w-3/12 flex items-center">
        <Link
          className="text-2xl saturate-150 font-semibold  ease-linear transition-all hover:-translate-y-3 duration-300"
          href="/"
        >
          <Image src={Logo} alt="logo" width={100} />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-[110] flex relative w-8 h-8 flex-col justify-between items-center md:hidden "
          onClick={() => setOpen(!open)}
        >
          <Hamburger toggled={open} toggle={setOpen} color="#a60000" />
        </div>

        <div className="hidden md:flex">
          <div
            className="relative text-l text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            onClick={toggleAboutMenu}
          >
            <div className="flex items-center mx-4">
              <Link href="/about" className="text-white hover:text-[#a60000]">
                About
              </Link>
              <div id="dropdown-trigger" onClick={toggleAboutMenu}>
                <span
                  className={`caret-dropdown ${aboutMenuOpen ? "active" : ""}`}
                ></span>
              </div>
            </div>
            <div
              className={`absolute transition-transform rotateMenu top-full left-0 mt-2 bg-slate-900 bg-opacity-10 backdrop-blur-xl drop-shadow-2xl text-white rounded shadow-lg ${
                aboutMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/about/portfolio"
                className="block transition-all hover:scale-105 ease-in-out duration-200 text-white px-4 py-2 hover:text-[#a60000]"
              >
                Portfolio
              </Link>
              <Link
                href="/about/ourteam"
                className="block transition-all hover:scale-105 ease-in-out duration-200 text-white px-4 py-2 hover:text-[#a60000]"
              >
                Our Team
              </Link>
            </div>
          </div>

          <div
            className="relative text-l text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            onClick={toggleServicesMenu}
          >
            <div className="flex items-center mx-4 cursor-pointer">
              <Link
                href="/services"
                className="text-white hover:text-[#a60000]"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <div id="dropdown-trigger" onClick={toggleServicesMenu}>
                <span
                  className={`caret-dropdown ${
                    servicesMenuOpen ? "active" : ""
                  }`}
                ></span>
              </div>
            </div>
            <div
              className={`absolute transition-transform rotateMenu top-full left-0 mt-2 bg-slate-900 bg-opacity-10 backdrop-blur-xl drop-shadow-2xl text-white rounded shadow-lg ${
                servicesMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/services/roofcare"
                className="block text-white hover:text-[#a60000] transition-all hover:scale-105 ease-in-out duration-200 px-4 py-2"
              >
                Roof Care
              </Link>
              <Link
                href="/services/roofinstall"
                className="block text-white hover:text-[#a60000] transition-all hover:scale-105 ease-in-out duration-200 px-4 py-2"
              >
                Roof Install
              </Link>
              <Link
                href="/services/addserv"
                className="block transition-all hover:scale-105 text-white hover:text-[#a60000] ease-in-out duration-200 px-4 py-2"
              >
                Additional Services
              </Link>
            </div>
          </div>
          <div className="relative text-l text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link
              href="/blog"
              className="text-white hover:text-[#a60000] mx-4"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </div>
          <div className="relative text-l text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link
              href="/contact"
              className="text-white hover:text-[#a60000] mx-4"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
