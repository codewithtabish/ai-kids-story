"use client";
import { SignUp } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center min-h-screen py-12">
      <SignUp
        appearance={{
          baseTheme: theme === "dark" ? dark : shadesOfPurple,
        }}
      />
    </div>
  );
}
