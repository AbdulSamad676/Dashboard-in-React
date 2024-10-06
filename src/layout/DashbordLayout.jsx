import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children, title }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-primary h-full flex justify-center ">
        <Sidebar />
      </div>

      <main className=" flex flex-col col-span-10 h-full overflow-auto">
        <Header title={title} />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
