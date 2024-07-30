import Logo from "./Logo";
import MenuSvg from "./MenuSvg";
import { Button, IconButton, PixelIcon } from "nes-ui-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import Navigation from "./Navigation";

interface headerProps {
  toggleDarkMode: () => void;
}


function Header({ toggleDarkMode }: headerProps) {
  const [isActive, setIsActive] = useState(false);
  const pathname = useState(window.location.pathname);

  // useEffect(() => {
  //   if (isActive) setIsActive(!isActive)
  // }, [pathname])

  console.log("clicked and active", isActive);

  return (
    <div
      className="border-base text-black-absolute dark:border-background dark:text-white-absolute fixed top-0 left-0 w-full z-1 uppercase p-2"
    >

      <div className="flex items-center justify-center px-5 max-lg:py-4">
        <AnimatePresence mode="wait">
          {isActive && <Navigation />}
        </AnimatePresence>
        <NavLink className="block w-[12rem] xl:mr-8" to="/">
          <Logo
            className="w-[4.5rem] h-[4.5rem] transition-colors hover:fill-primary-normal"
          ></Logo>
        </NavLink>
        <Button
          className="ml-auto text-center items-center"
          size="small"
          onClick={() => setIsActive(!isActive)}
        >
          <MenuSvg openNavigation={isActive} />
        </Button>
        <IconButton
          borderInverted
          className="text-center items-center"
          onClick={toggleDarkMode}
        >
          <PixelIcon
            name="dark:pixelicon-sun pixelicon-moon"
            inverted={false}
            size="small"
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
