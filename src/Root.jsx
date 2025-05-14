import React from "react";
import Navber from "./Components/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Components/Footer/Footer";
import Asibar from "./Components/Aside/Asibar";

const Root = () => {
  // Globally Spinner Added
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Navber></Navber>
      <div className="flex  gap-9 text-center">
        {/* AsideBar */}
        {isNavigating && <span>Loading...</span>}
        <div className="flex flex-col">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
