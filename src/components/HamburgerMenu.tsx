import React from "react";

import bgImage from "../assets/squares03.png";

function HamburgerMenu() {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.10]">
        <img
          className="w-full h-full object-cover"
          src={bgImage}
          width={700}
          height={950}
          alt="Background"
        />
      </div>
    </div>
  );
}

export default HamburgerMenu;
