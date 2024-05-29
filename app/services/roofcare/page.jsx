import React from "react";
import Image from "next/image";
import img1 from "@/public/bhePf-7.jpeg";
import img2 from "@/public/inspection.webp";
import img3 from "@/public/repair.webp";
import Link from "next/link";
import { Fragment } from "react";
import PulsatingBorderButton from "@/components/ui/Button";
import "../../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RoofCare() {
  return (
    <Fragment>
      <div
        className="min-h-screen bg-fixed bg-cover bg-no-repeat py-12"
        style={{ backgroundImage: "url('/@/public/asphaltShinglesImg.webp')" }}
      >
        {/* Hero Section with Gradient Background from Global CSS */}
        <div className="text-center py-24">
          <h1 className="text-5xl font-bold text-white mb-4">
            Roof Care & Maintenance
          </h1>
          <p className="text-xl text-neutral-100 mx-auto leading-relaxed max-w-xl">
            Ensure the longevity and durability of your roof with our
            comprehensive roof care services.
          </p>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1: Inspections */}
            <div className="bg-white backdrop-blur-lg bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={img2}
                alt="Roof Inspection"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="font-bold text-2xl text-left mb-2">
                  Inspections
                </h1>
                <p className="text-slate-100 text-base">
                  Regular inspections to detect and address potential issues
                  early, ensuring your roof remains in optimal condition.
                </p>
              </div>
            </div>

            {/* Service Card 2: Repairs */}
            <div className="bg-white backdrop-blur-lg bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={img3}
                alt="Roof Repair"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="font-bold text-left text-2xl mb-2">Repairs</h1>
                <p className="text-slate-100 text-base">
                  Expert repair services to fix leaks, damage, and wear,
                  extending the life of your roof.
                </p>
              </div>
            </div>

            {/* Service Card 3: Maintenance */}
            <div className="bg-white backdrop-blur-lg bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={img1}
                alt="Roof Maintenance"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="font-bold text-left text-2xl mb-2">
                  Maintenance
                </h1>
                <p className="text-slate-100 text-base">
                  Comprehensive maintenance programs to keep your roof in top
                  condition and prevent future problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <Link href="/contact" passHref>
            <div className="inline-block hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer">
              <PulsatingBorderButton>
                Contact Us{" "}
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="ml-2 icon-animate"
                />
              </PulsatingBorderButton>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
