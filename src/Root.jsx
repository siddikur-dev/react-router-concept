import React from "react";
import Navber from "./Components/Navber";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Asibar from "./Components/Aside/Asibar";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="flex  gap-9 text-center">
        <Asibar></Asibar>
        <div className="flex flex-col">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
