import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import MenuSvg from "./MenuSvg";
import { Button, IconButton, PixelIcon } from "nes-ui-react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavigationItem, navigation } from "../constants/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

interface headerProps {
  toggleDarkMode: () => void;
}


function Header({ toggleDarkMode }: headerProps) {
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

  const navigate = useNavigate();

  return (
    <div
      className="border-base text-black-absolute dark:border-background dark:text-white-absolute fixed top-0 left-0 w-full z-[9999] uppercase p-2"
    >

      <div className="flex items-center justify-center px-5 max-lg:py-4">
        <NavLink className="block w-[12rem] xl:mr-8" to="/">
          <Logo
            className="w-[4.5rem] h-[4.5rem] transition-colors hover:fill-primary-normal"
          ></Logo>
        </NavLink>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} border-base dark:border-background fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto lg:flex-row z-5">
            {navigation.map((item: NavigationItem) => (
              <NavLink
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code p-4 text-[1rem] transition-colors hover:text-primary-normal ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === window.location.hash ? "z-5 lg:text-code-13" : ""
                  } lg:leading-5 xl:px-12`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="flex p-[1rem] gap-[1rem]">
          <Button className="hidden lg:flex" onClick={() => navigate('/register')}>
            NEW ACCOUNT
          </Button>

          <Button className="hidden lg:flex" onClick={() => navigate('/login')}>
            LOGIN
          </Button>
        </div>

        <Button
          className="ml-auto lg:hidden text-center items-center"
          size="small"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
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
