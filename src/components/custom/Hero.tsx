"use client";
import Image from "next/image";
import React from "react";
// import HeroOne from "../../../src/public/images/heroone.svg";
import HeroTwo from "../../../src/public/images/herotwo.svg";
import HeroThree from "../../../src/public/images/herothree.svg";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme == "dark" ? HeroTwo : HeroThree;

  return (
    <div>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 dark:text-gray-200">
              Create Unique Stories
              <br className="hidden lg:inline-block dark:text-gray-400" />
              with AI-Powered Imagination
            </h1>
            <p className="mb-8 leading-relaxed dark:text-gray-400 text-gray-800">
              Unleash your creativity. Generate captivating, personalized
              stories instantly with AI. Start your next adventure with a click.
            </p>
            <div className="flex justify-center">
              <Button
                color="primary"
                size="lg"
                className="text-white"
                //   className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded md:w-[80%] w-full"
              alt="hero"
              src={isDark}
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
