"use client";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import BookCoverImage from "./_components/BookCoverImage";
import StoryPages from "./_components/StoryPages";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AppLoader from "@/components/custom/AppLoader";

type Props = {
  params: {
    storyId: string;
  };
};

const Page = ({ params }: Props) => {
  const [story, setStory] = useState<any>(null);
  const bookRef = useRef<any>(null); // Reference to HTMLFlipBook
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  const getSingleStory = async () => {
    const response = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.storyID, params?.storyId));
    setStory(response[0]);
  };

  useEffect(() => {
    getSingleStory();
  }, [params.storyId]);

  if (!story) {
    return <AppLoader />;
  }

  const totalChapters = story.output.chapters.length; // Total chapters
  const totalPages = totalChapters + 2; // Includes cover page and final page

  const handleFlip = (e: any) => {
    setCurrentPage(e.data); // Set current page index when flipping
  };

  return (
    <div className="py-8">
      <div className="py-8 px-5 md:px-2">
        <div className="md:ml-10 md:max-w-1/2">
          <h1 className="md:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200 md:ml-10">
            {story?.output?.story_cover?.title}
          </h1>
          <p className="dark:text-gray-300 py-5 text-[14px] leading-6 text-gray-800 md:max-w-[70%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            repellendus dicta! Officia necessitatibus voluptatibus vitae quas
            praesentium reiciendis consectetur soluta hic, obcaecati atque
            corrupti velit molestias ipsam cupiditate labore suscipit!
          </p>
        </div>

        <div className="md:max-w-4xl mx-auto py-5 flex flex-col items-center">
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={300}
            height={400}
            showCover={true}
            className="mt-5 w-full h-full shadow-md"
            ref={bookRef}
            onFlip={handleFlip} // Track page flipping
          >
            {/* Cover Page */}
            <div>
              <BookCoverImage imageUrl={story?.storyCoverImage} />
            </div>

            {/* Chapter Pages */}
            {story?.output?.chapters?.map((chapter: any, index: any) => (
              <div
                key={index}
                className="border px-3 dark:border-gray-800 bg-gray-400"
              >
                <StoryPages story={chapter} />
              </div>
            ))}

            {/* Final Page */}
            <div className="border px-5 py-10 dark:border-gray-800 bg-gray-400 flex flex-col items-center justify-center">
              {/* "The End" Title */}
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                The End
              </h2>

              {/* Story Summary */}
              <p className="mt-5 text-center text-lg text-gray-700 text-[11px] dark:text-gray-300 max-w-[80%]">
                Thank you for reading! This story explored themes of adventure,
                bravery, and the magic of imagination. We hope this tale of
                wonder has inspired you!
              </p>

              {/* Author Info */}
              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Written by: John Doe
                </h3>
                <p className="text-md mt-1 text-gray-600 dark:text-gray-300">
                  Visit:{" "}
                  <a
                    href="#"
                    className="text-blue-500 dark:text-blue-400 underline"
                  >
                    www.johndoeauthor.com
                  </a>
                </p>
              </div>

              {/* Share Section */}
              {/* Share Section */}
              <div className="mt-5 flex space-x-6 justify-center items-center">
                <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>

              {/* Footer Note */}
              <div className="mt-5">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  © 2024 John Doe - All rights reserved.
                </p>
              </div>
            </div>
          </HTMLFlipBook>

          <div className="flex justify-center w-full mt-5 space-x-10">
            {currentPage > 0 && (
              <button
                onClick={() => bookRef.current.pageFlip().flipPrev()}
                className="p-3 bg-gray-800 text-white rounded-full"
              >
                <FaArrowLeft size={20} />
              </button>
            )}
            {currentPage < totalPages - 1 && ( // Hide Next button on the last page
              <button
                onClick={() => bookRef.current.pageFlip().flipNext()}
                className="p-3 bg-gray-800 text-white rounded-full"
              >
                <FaArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
