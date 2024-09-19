"use client";
import AppLoader from "@/components/custom/AppLoader";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { createContext, useContext, useEffect, useState } from "react";

const UserContent = createContext<any>(0);

import React from "react";

const UserContextProvider = ({ children }: any) => {
  const { isLoaded, isSignedIn, user: authUser } = useUser();
  const [userInfo, setuserInfo] = useState<any>();

  useEffect(() => {
    authUser && saveUserInDB();

    return () => {};
  }, [authUser]);

  const saveUserInDB = async () => {
    try {
      const checkUser = await db
        .select()
        .from(Users)
        .where(
          eq(
            Users?.userEmail,
            authUser?.primaryEmailAddress?.emailAddress || ""
          )
        );

      if (!checkUser[0]) {
        const response = await db
          .insert(Users)
          .values({
            userImage: authUser?.imageUrl,
            userEmail: authUser?.emailAddresses[0]?.emailAddress,
            userName: authUser?.fullName,
          })
          .returning({
            userImage: Users?.userImage,
            userEmail: Users?.userEmail,
            userName: Users?.userName,
            credits: Users?.credits,
          });

        setuserInfo(response[0]);
      } else {
        setuserInfo(checkUser[0]);
      }
    } catch (error) {}
  };

  if (!isLoaded) {
    return <AppLoader />;
  }

  return (
    <UserContent.Provider
      value={{
        userInfo: userInfo,
        setuserInfo: setuserInfo,
      }}
    >
      {children}
    </UserContent.Provider>
  );
};

export const useUserContext = () => useContext(UserContent);

export default UserContextProvider;
