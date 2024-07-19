import Logo from "./Logo";
import ShoppingCartLogo from "./ShoppingCartLogo";
import { Button } from "nes-ui-react";

interface headerProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ darkMode, toggleDarkMode }: headerProps) {
  return (
    <header>
      <div className="logo-container">
        <Logo darkMode={darkMode} />
      </div>
      <div className="navigation-container">
        <nav className="nav-links">
          <a href="/docs">Docs</a>
          <a href="/about">About</a>
          <a href="/groupbuy">Group Buy</a>
          <a href="/products">Products</a>
        </nav>
        <div className="cart-container">
          <ShoppingCartLogo />
        </div>
        <Button color="warning" borderInverted onClick={toggleDarkMode}>
          <i className="fa-solid fa-moon"></i>
        </Button>
      </div>
    </header>
  );
}

export default Header;
