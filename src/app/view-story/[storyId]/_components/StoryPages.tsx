import { Play, Pause } from "lucide-react";
import React, { useEffect, useState } from "react";

type StoryPagesProps = {
  story: {
    chapter_title?: string; // Make these optional if they can be undefined
    text?: string;
  };
};

const StoryPages: React.FC<StoryPagesProps> = ({ story }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechInstance, setSpeechInstance] =
    useState<SpeechSynthesisUtterance | null>(null);

  const handlePlayPause = () => {
    const speech = window?.speechSynthesis;

    if (!isPlaying && story?.text) {
      // Start playing
      const textToSpeech = new SpeechSynthesisUtterance(story.text);
      setSpeechInstance(textToSpeech);
      speech?.speak(textToSpeech);
      setIsPlaying(true);

      // When speech ends, revert the icon back to Play
      textToSpeech.onend = () => {
        setIsPlaying(false);
      };
    } else {
      // Pause the speech
      speech?.cancel();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Stop the speech synthesis when navigating away from the component
    return () => {
      window?.speechSynthesis?.cancel();
      setIsPlaying(false);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-4 flex-row-reverse items-center">
        <h3 className="font-bold text-xl flex-1">
          {story?.chapter_title || "Untitled Chapter"}{" "}
          {/* Provide a fallback */}
        </h3>
        {isPlaying ? (
          <Pause
            className="w-6 h-6 cursor-pointer text-primary"
            onClick={handlePlayPause}
          />
        ) : (
          <Play
            className="w-6 h-6 cursor-pointer text-primary"
            onClick={handlePlayPause}
          />
        )}
      </div>

      <p className="dark:text-gray-200 text-gray-900 text-sm pt-4 max-h-[300px] leading-8 overflow-hidden min-h-[300px] mt-3 rounded-lg bg-gray-400 p-y-5">
        {story?.text || "No content available."} {/* Provide a fallback */}
      </p>
    </div>
  );
};

export default StoryPages;
