import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  try {
    // console.log(process.env.REPLICATE_API_KEY, "I AM HERE");
    const data = await req.json();
    const { prompt } = data;
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_KEY,
    });

    const input = {
      prompt: prompt,
      output_format: "png",
      output_quality: 80,
      aspect_ratio: "1:1",
    };

    const output: any = await replicate.run("black-forest-labs/flux-schnell", {
      input,
    });
    //=> ["https://replicate.delivery/yhqm/A8gbZlebANWBFSU1mTWSznU...
    return NextResponse.json({ imageUrl: output[0] });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error,
    });
  }
}
