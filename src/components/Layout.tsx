import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { setDarkModeActivation } from "nes-ui-react";
import Footer from "./Footer";
import Section from "./Section";
import PreLoader from "./PreLoader";
import heartSvg from "../assets/heart.svg";
import verticalGridLines from "../assets/vertical-grid-lines.svg";

function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(
    document.readyState === "complete" || document.readyState === "interactive",
  );
  const [showPreloader, setShowPreloader] = useState<boolean>(!isPageLoaded);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);

  useEffect(() => {
    const lightFavicon = document.getElementById(
      "favicon-light",
    ) as HTMLLinkElement | null;
    const darkFavicon = document.getElementById(
      "favicon-dark",
    ) as HTMLLinkElement | null;

    if (darkMode) {
      if (lightFavicon) lightFavicon.disabled = true;
      if (darkFavicon) darkFavicon.disabled = false;
      document.documentElement.classList.add("dark");
      setDarkModeActivation(true);
    } else {
      if (lightFavicon) lightFavicon.disabled = false;
      if (darkFavicon) darkFavicon.disabled = true;
      document.documentElement.classList.remove("dark");
      setDarkModeActivation(false);
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    if (!isPageLoaded) {
      document.addEventListener("readystatechange", handlePageLoad);
    }

    return () => {
      document.removeEventListener("readystatechange", handlePageLoad);
    };
  }, [isPageLoaded]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(!isPageLoaded);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPageLoaded]);

  return (
    <div className="flex flex-col min-h-screen">
      {showPreloader && <PreLoader />}
      <Header toggleDarkMode={toggleDarkMode} />
      <Section
        crosses
        crossesOffset="translate-y-[4rem]"
        className="flex-1 pt-[4rem] lg:pt-[4rem] overflow-hidden overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
      >
        <div className="relative h-full bg-white-absolute dark:bg-black-absolute overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
          <img
            src={verticalGridLines}
            className="absolute right-[0.25rem] tablet:right-[-2.1875rem] desktop:right-[-12rem] bottom-[13vh] tablet:bottom-[-9.5rem] desktop:bottom-[-0.5rem] z-1 opacity-50"
            alt=""
          />
          <img
            src={heartSvg}
            className="absolute right-[0.25rem] tablet:right-[-2.875rem] desktop:right-[-13.375rem] bottom-[20rem] tablet:bottom-[-6.5rem] desktop:bottom-[10.5rem] w-[5.625rem] h-[4.875rem]  tablet:w-[11.25rem] tablet:h-[9.75rem] desktop:w-[16.875rem] desktop:h-[4.375rem] z-1 opacity-50"
            alt=""
          />
          <Outlet />
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Layout;
