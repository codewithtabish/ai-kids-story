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

export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export default function StoryInputs() {
  const [storyType, setStoryType] = useState<string>(storyTypeList[0].label);
  const [storyUser, setStoryUser] = useState<string>(storyUsersList[0].label);
  const [storyTitle, setStoryTitle] = useState<string>();
  const [storyContent, setStoryContent] = useState<string>();
  const [storyImage, setStoryImage] = useState<string>(storyImageList[0].label);
  const handleGenerateStory = async () => {
    if (!storyTitle || !storyContent) {
      return alert("please fill all the fields");
    }
    console.log({ storyContent, storyTitle, storyImage, storyUser, storyType });
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
          {storyType} {storyUser} {storyTitle} {storyContent} {storyImage}
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
        <Button
          className="dark:text-white w-1/2"
          size={"lg"}
          onClick={handleGenerateStory}
        >
          Create Story
        </Button>
      </div>
    </div>
  );
}
