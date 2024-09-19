import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await db.select().from(StoryData).limit(5);
    const storyList = response;
    console.log("The reponse in the route is ", storyList);

    // Send the download URL as a response
    return new Response(
      JSON.stringify({ name: "Zain response and all its data" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log("The error while getting the all stories response is", error);
  }
}
