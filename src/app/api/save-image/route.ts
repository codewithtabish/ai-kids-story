import { storage } from "@/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid"; // To generate a unique filename

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON data from the request
    const data = await req.json();
    const { url } = data;

    // Fetch the content from the URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert the response to a Buffer
    const buffer = await response.arrayBuffer();

    // Create a unique filename for the image
    const filename = `story-images/${uuidv4()}.png`;

    // Convert the Buffer to a Blob
    const blob = new Blob([buffer], { type: "image/png" }); // Specify type

    // Create a reference to the Firebase Storage location
    const storageRef = ref(storage, filename);

    // Upload the Blob to Firebase Storage
    await uploadBytes(storageRef, blob, { contentType: "image/png" });

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);

    // Send the download URL as a response
    return new Response(JSON.stringify({ downloadURL }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
