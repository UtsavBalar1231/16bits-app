import logoDark from "/16bits-dark-logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <a href="/">
            <img src={logoDark} className="logo" alt="16bits logo" />
          </a>
        </div>
        <div className="navigation-container">
          <nav className="nav-links">
            <a href="/docs">Docs</a>
            <a href="/about">About</a>
            <a href="/groupbuy">Group Buy</a>
            <a href="/Products">Products</a>
          </nav>
          <div className="cart-container">
            <i className="fa-solid fa-cart-shopping">: 0</i>
          </div>
        </div>
      </header>

      <main></main>

      <footer>
        <div className="footer-container">
          <p>© 2024 16bits. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
