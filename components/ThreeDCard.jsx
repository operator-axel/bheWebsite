import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardItem } from "@/components/ui/3d-card";

export function ThreeDCard({ title, description, imageUrl, link }) {
  return (
    <CardBody className="bg-slate-100 relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={imageUrl}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-20">
        <Link href={link}>
          <CardItem
            translateZ={20}
            as="button"
            className="self-center inline-flex items-center justify-center rounded-xl bg-[#02c9ff] py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-[#02c9ff]/75  duration-300 ease-out transition-all hover:scale-125"
            href={link}
          >
            Read More
          </CardItem>
        </Link>
      </div>
    </CardBody>
  );
}
