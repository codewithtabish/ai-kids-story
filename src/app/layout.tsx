import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import NextUIThemesProvider from "@/components/custom/NextUiProvider";
// import AppHeader from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import HeaderTwo from "@/components/custom/Header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      // publishableKey="pk_test_d2FybS1zdHVkLTI0LmNsZXJrLmFjY291bnRzLmRldiQ"
      // appearance={{
      //   baseTheme: [dark, neobrutalism],
      //   variables: { colorPrimary: "blue" },
      //   signIn: {
      //     baseTheme: [shadesOfPurple],
      //     variables: { colorPrimary: "green" },
      //   },
      // }}
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextUIThemesProvider>
              <div className="bg-gray-100 dark:bg-gray-800  min-h-screen text-gray-800 dark:text-gray-100 ">
                <HeaderTwo />
                {/* <AppHeader /> */}
                <div className="max-w-6xl min-h-screen mx-auto">
                  <TooltipProvider>{children}</TooltipProvider>
                  <Toaster />
                </div>
                <Footer />
              </div>
            </NextUIThemesProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
