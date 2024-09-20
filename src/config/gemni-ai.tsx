/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMNI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey! || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 years kids,Educational story,and all images in paper cut style:\nstory of programmer and a magical laptop ,give me 5 chapters, with detailed image text promt for each of \nchapter and image promt for story cover book with story name,all in json format   ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_cover": {\n    "title": "The Magical Laptop",\n    "image_prompt": "A paper cut style illustration of a child with wide eyes, sitting in front of a glowing laptop with stars and code swirling around it. The laptop has a magical aura, with sparks flying off it.  The background is a bright, colorful room with bookshelves and toys."\n  },\n  "chapters": [\n    {\n      "chapter_title": "The New Laptop",\n      "text": "Lily loved getting new things. But nothing could compare to the excitement she felt when her parents gifted her a brand new laptop for her birthday. It was sleek and silver, with a bright, shiny screen.  Lily couldn\'t wait to play games and watch cartoons on it.  But first, she needed to learn how to turn it on.",\n      "image_prompt": "A paper cut style illustration of Lily, a happy young girl with bright eyes, holding the brand new laptop. It is wrapped in bright colorful paper, with a large pink ribbon. The background is a birthday party scene, with balloons and streamers."\n    },\n    {\n      "chapter_title": "The Mysterious Code",\n      "text": "Lily\'s dad helped her turn on the laptop. Suddenly, instead of the usual welcome screen, strange symbols and letters appeared. It was a code! Lily’s dad smiled and said, “This is how the computer talks. It’s like a secret language.” Lily was fascinated. She wanted to learn how to speak the code too.",\n      "image_prompt": "A paper cut style illustration of Lily and her father sitting at a table with the laptop open. The screen shows a colorful code with flashing lights. Lily\'s father is pointing at the code, explaining it to her with a smile."\n    },\n    {\n      "chapter_title": "The Magical Commands",\n      "text": "Lily and her dad started learning the code together. They typed in simple commands, like \'draw a square\' and \'change the color to blue\'.  The laptop obeyed, creating shapes and colors on the screen.  Lily was amazed! She realized the code wasn’t just a language, it was a magic spell that could make the computer do anything she wanted!",\n      "image_prompt": "A paper cut style illustration of Lily typing on the laptop, surrounded by colorful shapes and objects that appear on the screen. The shapes are changing colors and moving as she types, showing the magic of the code. "\n    },\n    {\n      "chapter_title": "The Amazing Program",\n      "text": "Soon, Lily learned to write her own code. She created games and stories, animations and pictures, all with the magic of the code.  Her laptop was no longer just a computer, it was a portal to a world of imagination and creation. Lily was now a programmer, a coder, a maker of magic!"\n      "image_prompt": "A paper cut style illustration of Lily smiling proudly in front of her laptop. The screen shows a game she made, with characters and a colorful background. Lily is holding a piece of paper with code written on it. The image shows the joy of creation and the power of programming."\n    },\n    {\n      "chapter_title": "Sharing the Magic",\n      "text": "Lily loved sharing her magical code with her friends. She taught them how to use the code to create their own amazing things. Soon, everyone was writing their own programs, and the whole classroom was filled with the exciting buzz of digital magic. Lily realized that the magic of coding wasn’t just for her, it was for everyone to enjoy.",\n      "image_prompt": "A paper cut style illustration of Lily and her friends sitting around a table with laptops, all working together on different projects. The image is filled with colorful code, shapes, and happy faces, showing the collaborative spirit of coding and sharing the magic."\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});
