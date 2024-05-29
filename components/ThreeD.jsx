"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import img1 from "@/public/solarDick.webp";
import img2 from "@/public/modernGutters.webp";
import img3 from "@/public/soffitDiagram.webp";
import img4 from "@/public/fasciaDiagram.webp";

const Card = ({ title, description, imageSrc, imageAlt }) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-opacity-15 grid group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-2xl font-bold text-neutral-200">
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-md max-w-sm mt-2 text-neutral-400"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mb-8 mt-4">
        <Image
          src={imageSrc}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={imageAlt}
        />
      </CardItem>
    </CardBody>
  </CardContainer>
);

export function ThreeDCardDemo() {
  return (
    <div class="grid grid-cols-1 xl:grid-cols-4 mx-2 place-items-center">
      <Card
        title="Solar"
        description="Our dedicated team ensures the longevity of your roof, offering top-notch inspections, repairs, and maintenance services."
        imageSrc={img1}
        imageAlt="Solar Image"
      />
      <Card
        title="Gutters"
        description="Our experienced crew guarantees the durability of your gutters, providing thorough cleaning, repair, and upkeep services."
        imageSrc={img2}
        imageAlt=" Gutters Image"
      />
      <Card
        title="Soffit"
        description="Our skilled professionals ensure the reliability of your soffit, delivering meticulous installation, repair, and maintenance solutions."
        imageSrc={img3}
        imageAlt="Soffit Diagram"
      />
      <Card
        title="Fascia"
        description="Our roofing specialists bring precision to fascia work, focusing on strong, weather-resistant installations and dedicated, detail-oriented repairs for lasting performance."
        imageSrc={img4}
        imageAlt="Fascia Diagram"
      />
    </div>
  );
}
