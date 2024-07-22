import { Button } from "nes-ui-react";
import Logo from "./Logo";
import ShoppingCartLogo from "./ShoppingCartLogo";

interface headerProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function emptyFunction() {}

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
          <a href="/products">Products</a>
          <a href="/checkout">Checkout</a>
        </nav>
        <div className="cart-container">
          <ShoppingCartLogo />
        </div>
        <div className="header-buttons">
          <Button color="warning" onClick={emptyFunction}>
            Login
          </Button>
          <Button color="warning" onClick={toggleDarkMode}>
            <i className="fa-solid fa-moon"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
