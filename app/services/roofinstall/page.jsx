import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img1 from "@/public/asphaltShinglesImg.webp";
import flatRoofImg from "@/public/flatRoof.webp";
import metalRoofingImg from "@/public/metalRoofingImg.webp";
import clayTilesImg from "@/public/clayTilesImg.webp";

export default function BentoGridFullHeight() {
  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row items-stretch">
      {/* Main Card */}
      <div
        className="flex flex-col justify-between mb-8 md:mb-0 md:mr-4 bg-opacity-20 bg-slate-900 p-6 rounded-lg shadow-lg backdrop-blur-md"
        style={{ maxWidth: "100%", md: "400px" }}
      >
        <h1 className="text-white text-center mt-16 text-3xl font-bold mb-4 backdrop-brightness-100">
          Explore the variety of materials used in modern roofing to find the
          best fit for your home.
        </h1>
        <div className="text-white mt-auto text-opacity-40 text-center">
          <FontAwesomeIcon
            icon={faHammer}
            size="1x"
            className="inline-flex mb-16 h-56 w-56"
          />
        </div>
      </div>

      {/* Right Grid of Four Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        {[
          {
            img: img1,
            title: "Asphalt Shingles",
            description:
              "Popular for their cost-effectiveness and versatility.",
          },
          {
            img: flatRoofImg,
            title: "Flat Roofs",
            description:
              "Versatile and modern, ideal for energy efficiency and extra outdoor living space.",
          },
          {
            img: metalRoofingImg,
            title: "Metal Roofing",
            description: "Durable, long-lasting, and energy-efficient.",
          },
          {
            img: clayTilesImg,
            title: "Concrete Tiles",
            description: "Offers a classic aesthetic with excellent longevity.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-slate-900 bg-opacity-20 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center backdrop-blur-md"
          >
            <Image
              src={card.img}
              alt={`Image ${index + 1}`}
              width={200} // Adjusted to maintain aspect ratio
              height={200} // Adjusted to maintain aspect ratio
              objectFit="cover"
              className="rounded-lg mb-4 "
              layout="responsive"
            />
            <p className="font-semibold text-xl text-white">{card.title}</p>{" "}
            {/* Adjusted font size for consistency */}
            <p className="text-sm text-center text-white text-opacity-80 mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
