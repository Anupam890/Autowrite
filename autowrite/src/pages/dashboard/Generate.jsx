import React from "react";
import { SideBar } from "./components/SideBar";
import TopNav from "./components/TopNav";

const Generate = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div>
        <SideBar />
      </div>
      <div>
        <TopNav />
      </div>
    </div>
  );
};

export default Generate;
