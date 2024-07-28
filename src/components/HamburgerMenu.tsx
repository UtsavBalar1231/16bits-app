import { useEffect, useState } from "react";
import { BlockText, PixelBorder } from "nes-ui-react";

function HamburgerMenu() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("nes-ui-dark-mode"),
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(
        document.documentElement.classList.contains("nes-ui-dark-mode"),
      );
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const bgColor = isDarkMode ? "#141617" : "#f9f5d7";

  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <PixelBorder
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <BlockText
          shadow
          shadowInverted
          backgroundColor={bgColor}
          style={{ width: "100%", height: "100%" }}
        ></BlockText>
      </PixelBorder>
    </div>
  );
}

export default HamburgerMenu;
