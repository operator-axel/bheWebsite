"use client";
import { useState } from "react";
import Image from "next/image";
import Zt from "@/public/zac.jpeg";
import Logo from "@/public/3d2.png";

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState("");

  return (
    <section className="py-6 backdrop-blur-2xl bg-slate-900 bg-opacity-50 text-gray-100 h-fit">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold text-center sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Meet Our Leadership
        </h1>
        <p className="max-w-2xl text-center text-gray-400"></p>
        <div className="flex flex-row flex-wrap justify-center">
          {[
            { name: "Zac Tracy", role: "Chief Executive Officer", image: Zt },
            { name: "Christie Kratz", role: "Operations Manager", image: Logo },
            { name: "Ty Graham", role: "Project Advisor", image: Logo },
          ].map((member, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center m-8 text-center transition-all duration-500 ${
                hoveredMember === member.name
                  ? "scale-125 z-10"
                  : "hover:scale-125"
              } ${
                hoveredMember && hoveredMember !== member.name ? "blur-lg" : ""
              }`}
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember("")}
            >
              <Image
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full drop-shadow-2xl shadow-[#02c9ff] hover:shadow-[#02c9ff] shadow-md hover:shadow-xl transition-all ease-linear duration-300"
                src={member.image}
              />
              <p className="text-xl font-semibold">{member.name}</p>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
