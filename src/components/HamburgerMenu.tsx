import { BlockText, PixelBorder } from "nes-ui-react";

function HamburgerMenu() {
  const isDarkMode = document.documentElement.classList.contains('nes-ui-dark-mode');
  let bgColor = null;

  if (!isDarkMode) {
    bgColor = '#f9f5d7';
  } else {
    bgColor = '#141617';
  }
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <PixelBorder style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <BlockText shadow shadowInverted backgroundColor={bgColor} style={{ width: '100%', height: '100%' }}>
        </BlockText>
      </PixelBorder>
    </div>
  );
}

export default HamburgerMenu;
