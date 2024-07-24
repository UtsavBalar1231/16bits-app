import { Button, IconButton, PixelIcon } from "nes-ui-react";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { NavigationItem, navigation } from "../constants/navigation";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MenuSvg from "./MenuSvg";

interface headerProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ darkMode, toggleDarkMode }: headerProps) {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`${
        darkMode
          ? "border-background text-white-absolute"
          : "border-base text-black-absolute"
      } fixed top-0 left-0 w-full z-50 uppercase p-2`}
    >
      <div className="flex items-center justify-center px-5 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <Logo
            darkMode={darkMode}
            className="w-[4.5rem] h-[4.5rem] transition-colors hover:fill-primary-normal"
          ></Logo>
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} ${
            darkMode ? "border-background" : "border-base"
          }  fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item: NavigationItem) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code p-4 text-[1rem] transition-colors hover:text-primary-normal ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash ? "z-2 lg:text-code-13" : ""
                } lg:leading-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="flex p-[1rem] gap-[1rem]">
          <Button
            className="hidden lg:flex"
            onClick={() => (window.location.href = "/signup")}
          >
            New Account
          </Button>
          <Button
            className="hidden lg:flex"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </Button>
          <IconButton
            borderInverted
            className="hidden lg:flex text-center items-center"
            onClick={toggleDarkMode}
          >
            <PixelIcon
              name={darkMode ? "pixelicon-sun" : "pixelicon-moon"}
              inverted={false}
              size="small"
            />
          </IconButton>
        </div>
        <Button
          className="ml-auto lg:hidden text-center items-center"
          size="small"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
