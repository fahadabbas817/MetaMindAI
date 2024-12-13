import React from "react";

import TopMenu from "./TopMenu";
import HeroSection from "./HeroSection";

import PopupDialog from "../PopupDialog";

const Main = () => {
  return (
    <div className="main w-full">
      <TopMenu />
      <div className="main-container">
        <HeroSection />
        <PopupDialog />
      </div>
    </div>
  );
};

export default Main;
