import Logo from "./Logo";
import MenuSvg from "./MenuSvg";
import Navigation from "./Navigation";
import { AnimatePresence } from 'framer-motion';
import { Button, IconButton, PixelIcon } from "nes-ui-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
interface headerProps {
  toggleDarkMode: () => void;
  cartItems: number;
  updateCartItems: (cartItems: number) => void
}

function Header({ toggleDarkMode, cartItems }: headerProps) {
  const [isActive, setIsActive] = useState(false);
  const pathname: string = window.location.pathname;

  useEffect(() => {
    if (isActive) setIsActive(!isActive)
  }, [pathname])

  return (
    <div
      className="border-base text-black-absolute dark:border-background dark:text-white-absolute fixed top-0 left-0 w-full z-3 uppercase p-2"
    >

      <div className="flex items-center justify-center px-5 max-lg:py-4">
        <AnimatePresence mode="wait">
          {isActive && <Navigation />}
        </AnimatePresence>
        <NavLink className="block w-[12rem] xl:mr-8" to="/">
          <Logo
            className="w-[4.5rem] h-[4.5rem] hover:fill-code-15 dark:hover:fill-code-09 transition-colors"
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
        <IconButton
          borderInverted
          className="text-center items-center"
          onClick={() => (window.location.href = "/cart")}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 11"
            width="16"
            height="16">
            <polygon points="1,2 3,2 3,3 1,3" />
            <polygon points="2,3 8,3 8,7 3,7 3,6 2,6" />
            <polygon points="3,7 4,7 4,8 3,8" />
            <polygon points="6,7 7,7 7,8 6,8" />
          </svg>
          <span className="ml-2">
            {cartItems}
          </span>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
