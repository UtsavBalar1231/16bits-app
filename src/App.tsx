import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => setDarkModeActivation(darkMode), [darkMode]);

  // const [cartItems, setCartItems] = useState(0);

  // function addToCa3rt() {
  // setCartItems(cartItems + 1);
  // }

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Main />

      <footer>
        <div className="footer-container">
          <p>© 2024 16bits. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
