import React from "react";
import Profile from "./Profile";
import RoomSection from "./RoomSection";

function MainSection() {
    return (
      <div className="Section">
        <Profile />
        <RoomSection />
      </div>
    );
  }

  export default MainSection;