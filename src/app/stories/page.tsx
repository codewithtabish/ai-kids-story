"use client";
import AppHeader from "@/components/custom/Navbar";
import SingleStory from "@/components/custom/SingleStory";
import { Button } from "@/components/ui/button";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { desc } from "drizzle-orm";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [storyList, setStoryList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const limitPerFetch = 8; // Adjust to ensure you load two rows of 4 columns

  useEffect(() => {
    // Initial load of stories
    getStories(0);
  }, []);

  const getStories = async (newOffset: number) => {
    setLoading(true);

    // Fetch stories with the adjusted offset and limit
    const response = await db
      .select()
      .from(StoryData)
      .limit(limitPerFetch)
      .orderBy(desc(StoryData.id))
      .offset(newOffset);

    // Check if the response has unique stories and update the list
    setStoryList((prevStories: any) => {
      const uniqueStories = response.filter(
        (newStory) =>
          !prevStories.some((story: any) => story.id === newStory.id)
      );
      return [...prevStories, ...uniqueStories];
    });

    // Update the offset after loading the data
    setOffset(newOffset + limitPerFetch);
    setLoading(false);
  };

  return (
    <div>
      <AppHeader />
      <div className="md:py-18 py-14 md:pb-20 max-w-6xl mx-auto">
        <div className="py-5 pb-6">{/* Header or title */}</div>
        <div className="grid md:grid-cols-4 gap-5 items-center">
          {storyList.map((item: any, index: any) => (
            <SingleStory key={index} story={item} />
          ))}
        </div>
        <div className="flex justify-center py-5">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <LoaderCircle
                className="w-10 h-10 cursor-pointer"
                onClick={() => getStories(offset)}
              />
            </div>

            // <Button onClick={() => getStories(offset)}>Load More</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
