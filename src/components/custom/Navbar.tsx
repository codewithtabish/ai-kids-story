"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import AppLogo from "../../../src/public/logo.svg";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { BriefcaseBusiness, Heart } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    link: "/",
    id: 1,
  },
  {
    label: "Create Story",
    link: "/create-story",
  },
  {
    label: "Explore",
    link: "/explore",
    id: 3,
  },

  {
    label: "Blogs",
    link: "/blog",
    id: 4,
  },
];
export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoaded, user: authUser } = useUser();

  return (
    <p></p>
    // <Navbar maxWidth="lg" onMenuOpenChange={setIsMenuOpen}>
    //   <NavbarBrand>
    //     <Image src={AppLogo} alt="NextUI logo" width={92} height={92} />
    //     {/* <AcmeLogo /> */}
    //     {/* <p className="font-bold text-inherit">ACME</p> */}
    //   </NavbarBrand>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="sm:hidden block"
    //     />
    //     {navLinks.map((link) => (
    //       <NavbarItem key={link.id} isActive={link.id == 1}>
    //         <Link color="foreground" href={link.link}>
    //           {link.label}
    //         </Link>
    //       </NavbarItem>
    //     ))}
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem>
    //       <ModeToggle />
    //     </NavbarItem>
    //     <NavbarItem>
    //       {/* <Button as={Link} color="primary" href="#" variant="flat">
    //         Login
    //       </Button> */}
    //       <div className="sm:flex sm:gap-4 items-center">
    //         {!isLoaded ? (
    //           <div className="w-6 h-6 animate-spin transition-all rounded-md duration-500 spinner  border-gray-800 dark:border-gray-50 border-2"></div>
    //         ) : authUser ? (
    //           <UserButton>
    //             <UserButton.MenuItems>
    //               <UserButton.Link
    //                 label="Dashboard"
    //                 labelIcon={<BriefcaseBusiness size={15} />}
    //                 href="/dashboard"
    //               />
    //               <UserButton.Link
    //                 label="Create Story"
    //                 labelIcon={<Heart size={15} />}
    //                 href="/create-story"
    //               />
    //               <UserButton.Link
    //                 label="Create Blog"
    //                 labelIcon={<Heart size={15} />}
    //                 href="/create-blog"
    //               />
    //               <UserButton.Action label="manageAccount" />
    //             </UserButton.MenuItems>
    //           </UserButton>
    //         ) : (
    //           <Button className="dark:text-white">
    //             <SignInButton
    //             // signUpForceRedirectUrl={"/"}
    //             // signUpFallbackRedirectUrl={"/"}
    //             />
    //           </Button>
    //         )}
    //       </div>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarMenu>
    //     {navLinks.map((link) => (
    //       <NavbarMenuItem key={link.id}>
    //         <Link color="foreground" href={link.link}>
    //           {link.label}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
  );
}
