"use client";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Button as NextUIButton } from "@nextui-org/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  StoryImage,
  storyImageList,
  StoryType,
  storyTypeList,
  StoryUser,
  storyUsersList,
} from "@/static/storiesListsData";
import { useState } from "react";
import { chatSession } from "@/config/gemni-ai";
import { db } from "@/config/db";
import { StoryData, Users } from "@/config/schema";
import { uuid } from "uuidv4";
import StoryMidal from "@/components/custom/StoryModal";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useUserContext } from "@/context/UserContext";
import { eq } from "drizzle-orm";

export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export default function StoryInputs() {
  const [storyType, setStoryType] = useState<string>(storyTypeList[0].label);
  const [storyUser, setStoryUser] = useState<string>(storyUsersList[0].label);
  const [storyTitle, setStoryTitle] = useState<string>();
  const [storyContent, setStoryContent] = useState<string>();
  const [storyImage, setStoryImage] = useState<string>(storyImageList[0].label);
  const [finalPrmot, setfinalPrmot] = useState<any>();
  const [storyLoader, setStoryLoader] = useState(false);
  const { isLoaded, isSignedIn, user: authUser } = useUser();
  const [savedStoryID, setSavedStoryID] = useState<any>();
  const router = useRouter();
  const { toast } = useToast();
  const { userInfo, setuserInfo } = useUserContext();

  const handleGenerateStory = async () => {
    if (userInfo?.credits <= 1) {
      return toast({
        variant: "destructive",
        title: "Uh oh! please update your coins .",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    if (!storyTitle || !storyContent) {
      return toast({
        variant: "destructive",
        title: "Uh oh! please enter all fields.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    try {
      setStoryLoader(true);
      const promet = `create kids story on description for ${storyUser},${storyType},and all images in ${storyImage}:
 ${storyTitle} ,give me 5 chapters, with detailed image text promt for each of
 chapter and image promt for story cover book with story name,all in json format
`;
      const response = await chatSession.sendMessage(promet);
      setfinalPrmot(response?.response?.text());
      let story: any;
      if (response) {
        story = JSON.parse(response?.response?.text());
      }
      try {
        const imageResponse = await axios.post("/api/generate-image", {
          prompt:
            "Add text with title" +
            story?.story_cover.title +
            "in bold text for book cover ," +
            story?.story_cover?.image_prompt,
        });
        console.log(imageResponse?.data);
        const savedImageResponse = await axios.post("/api/save-image", {
          url: imageResponse?.data?.imageUrl,
        });
        await saveINDB(
          response?.response?.text(),
          savedImageResponse?.data?.downloadURL
        );
      } catch (error) {
        console.log("The image model error is ", error);
      }

      setStoryLoader(false);
    } catch (error) {
      console.log("The error with Gemni ", error);
      setStoryLoader(false);
    } finally {
      // toast({
      //   title: "OH ! Story created .",
      //   description: "Story added in DB 💞💞 .",
      // });
      setStoryLoader(false);
    }
  };
  const saveINDB = async (output: any, bannerImage: string) => {
    try {
      const storyID = uuid();
      const response = await db
        .insert(StoryData)
        .values({
          storyTitle: storyTitle,
          storyID: storyID,
          storyAgeGroup: storyUser,
          storyImageStyle: storyImage,
          storySubject: storyContent,
          output: JSON.parse(output),
          storyCoverImage: bannerImage,
          userEmail: authUser?.primaryEmailAddress?.emailAddress,
          userName: authUser?.fullName,
          userImage: authUser?.imageUrl,
        })
        .returning({ storyID: StoryData.storyID });
      setSavedStoryID(response[0]?.storyID);
      router.replace("/view-story/" + response[0]?.storyID);
      updateUserCredits();
      toast({
        title: "OH ! Story created .",
        description: "Story added in DB 💞💞 .",
      });

      console.log("The response from DB is ", response);
    } catch (error) {
      console.log("The error with saving in DB IS  ", error);
    }
  };

  const updateUserCredits = async () => {
    try {
      const response = await db
        .update(Users)
        .set({
          credits: Number(userInfo?.credits - 1),
        })
        .where(
          eq(
            Users?.userEmail,
            authUser?.primaryEmailAddress?.emailAddress || ""
          )
        )
        .returning({
          userImage: Users?.userImage,
          userEmail: Users?.userEmail,
          userName: Users?.userName,
          credits: Users?.credits,
        });
      console.log("Here data is of updating yser is ", response);
      setuserInfo(response[0]);
    } catch (error) {
      console.log("The error while Updating user is ", error);
    }
  };
  return (
    <div className="grid min-h-screen w-full pl-[56px] py-16">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4 border-gray-500 dark:border-gray-200">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              value={storyTitle}
              onChange={(value) => setStoryTitle(value.target.value)}
              type="text"
              placeholder="Story title"
              className="border-gray-500"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="model">Model</Label>
            <Select
              onValueChange={(value) => setStoryType(value)}
              defaultValue={storyTypeList[0].label}
            >
              <SelectTrigger
                id="model"
                className="items-start [&_[data-description]]:hidden    border-gray-500"
              >
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {storyTypeList.map((story: StoryType) => {
                  return (
                    <SelectItem value={story.label} key={story.id}>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Rabbit className="size-5" />
                        <div className="grid gap-0.5">
                          <p>
                            <span className="font-medium text-foreground">
                              {story.label}
                            </span>
                          </p>
                          <p className="text-xs" data-description>
                            Our fastest model for general use cases.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          {finalPrmot}
          {/* {storyType} {storyUser} {storyTitle} {storyContent} {storyImage} */}
          {/* {"  "}6{savedStoryID} */}
          <div className="grid gap-3">
            <Label htmlFor="role">Kids</Label>
            <Select
              onValueChange={(value) => setStoryUser(value)}
              defaultValue={storyUsersList[0].label}
            >
              <SelectTrigger className="border-gray-500">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent>
                  {storyUsersList.map((story: StoryUser) => {
                    return (
                      <SelectItem value={story.label} key={story.id}>
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              <span className="font-medium text-foreground">
                                {story.label}
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              {/* Our fastest model for general use cases. */}
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="role">Story Image</Label>
            <Select
              onValueChange={(value) => setStoryImage(value)}
              defaultValue={storyImageList[0].label}
            >
              <SelectTrigger className="border-gray-500">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent>
                  {storyImageList.map((story: StoryImage) => {
                    return (
                      <SelectItem value={story.label} key={story.id}>
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              <span className="font-medium text-foreground">
                                {story.label}
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              {/* Our fastest model for general use cases. */}
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </SelectContent>
            </Select>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4 border-gray-500 dark:border-gray-200">
          <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>

          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea
              value={storyContent}
              onChange={(text) => setStoryContent(text.target.value)}
              id="content"
              placeholder="You are a..."
              className="min-h-[9.5rem]"
            />
          </div>
        </fieldset>
      </form>
      <div className="flex justify-center items-center my-6">
        <NextUIButton
          isDisabled={storyLoader}
          color="primary"
          className="dark:text-white w-1/2"
          size={"lg"}
          onClick={handleGenerateStory}
        >
          Create Story
        </NextUIButton>
      </div>
      <StoryMidal loader={storyLoader} />
    </div>
  );
}
