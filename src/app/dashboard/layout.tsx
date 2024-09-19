import React from "react";
import SideBar from "./_components/Sidebar";
import MainTwo from "./_components/MainTwo";
import DashMainHeader from "./_components/DashMainHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashMainHeader />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;

//  <div className="grid grid-cols-12 gap-4">
//    <div className="grid col-span-2 col-start-auto w-full  py-5 shadow-md dark:border-r-2 border-b-gray-[50] h-screen">
//      <SideBar />
//    </div>
//    <div className="col-span-10 py-5">
//      {/* <DashBoardHeader /> */}
//      <div className="p-10">{children}</div>
//    </div>
//  </div>;
