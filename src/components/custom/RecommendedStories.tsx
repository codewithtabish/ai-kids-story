import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import React, { useEffect, useState } from "react";
import SingleStory from "./SingleStory";
import axios from "axios";

const RecommendedStories = async () => {
  const response = await db.select().from(StoryData).limit(6);
  const storyList = response;

  return (
    <div className="md:py-18 py-14 md:pb-20 max-w-6xl mx-auto">
      <div className="py-5 pb-6">
        <h1 className="text-3xl font-bold ">Recommended Stories</h1>
      </div>
      <div className="grid md:grid-cols-4 gap-5 items-center ">
        {storyList?.map((item: any, index: any) => {
          return <SingleStory story={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedStories;
