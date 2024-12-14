import React from "react";

import TopMenu from "../components/main/TopMenu";
import HeroSection from "../components/main/HeroSection";

import PopupDialog from "../components/PopupDialog";

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
