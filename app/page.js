"use client";

import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Clouds from "../components/Clouds";
import Slider from "../components/ui/Slider";
import Testimonies from "../components/ui/Testimonies2";
import { TdHomeCards } from "../components/HomeCards";
import Widget from "@/components/Widget";

export default function Home() {
  return (
    <main>
      <Clouds />
      <Hero />
      <Widget />
      <TdHomeCards />
      <Slider />
      <Testimonies />
      <Partners />
    </main>
  );
}
