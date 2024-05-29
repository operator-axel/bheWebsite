import Image from "next/image";
import React from "react";
import img1 from "../public/bhePf-1.jpeg";
import img2 from "../public/bhePf-2.jpeg";
import img3 from "../public/bhePf-3.jpeg";
import img4 from "../public/bhePf-4.jpeg";
import img5 from "../public/bhePf-5.jpeg";

import img6 from "../public/bhePf-6.jpeg";
import img7 from "../public/hB1.jpg";
import img8 from "../public/hB2.jpg";
import img9 from "../public/hB3.jpg";

const images = [
  { src: img1, width: 640, height: 480 },
  { src: img2, width: 640, height: 480 },
  { src: img3, width: 640, height: 480 },
  { src: img4, width: 640, height: 480 },
  { src: img5, width: 640, height: 480 },
  { src: img6, width: 640, height: 480 },
  { src: img7, width: 640, height: 480 },
  { src: img8, width: 640, height: 480 },
  { src: img9, width: 640, height: 480 },
  // Add more images as needed
];

export default function PhotoGrid() {
  return (
    <div className="h-fit w-full bg-black bg-opacity-20 bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Photo Gallery
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full max-w-6xl">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full relative">
            <Image
              src={image.src}
              alt={`Image ${index}`}
              width={image.width}
              height={image.height}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
