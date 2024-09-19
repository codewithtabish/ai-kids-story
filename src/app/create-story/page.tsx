import React from "react";
import StoryInputs from "./_components/story-inputs";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-8 pt-16 px-5  ">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-800 dark:text-gray-200">
          Create Your Own AI-Generated Story
        </h1>
        <p
          className="mt-4 md:text-lg text-gray-600 dark:text-gray-400
        md:max-w-[70%]"
        >
          Let your imagination soar! Enter a few details, and watch as our AI
          crafts a unique story just for you. Whether it's an adventure,
          mystery, or fantasy, the possibilities are endless.
        </p>
      </div>
      <StoryInputs />
    </div>
  );
};

export default page;
