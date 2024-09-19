import ChartOne from "@/components/custom/ChartOne";
import ChartThree from "@/components/custom/ChartThree";
import ChartTwo from "@/components/custom/ChartTwo";
import Hero from "@/components/custom/Hero";
import RecommendedStories from "@/components/custom/RecommendedStories";
import Testmonial from "@/components/custom/Testmonial";
// import { ModeToggle } from "@/components/custom/ModeToggle";
// import { Button } from "@/components/ui/button";
// import { Button as NextUIButton } from "@nextui-org/button";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <RecommendedStories />
      <Testmonial />

      <div className="flex my-8  md:flex-row flex-col gap-4 items-center">
        <div className="flex-1">
          <ChartOne />
        </div>
        <div className="flex-1">
          <ChartTwo />
        </div>
        <div className="flex-1">
          <ChartThree />
        </div>
      </div>
    </div>
  );
};

export default page;
