import React from "react";
import { ThreeDCardDemo } from "@/components/ThreeD";
import { GridBackgroundDemo } from "@/components/ui/GridBg.jsx";

export default function Additional() {
  return (
    <div>
      <GridBackgroundDemo>
        <ThreeDCardDemo />
      </GridBackgroundDemo>
    </div>
  );
}
