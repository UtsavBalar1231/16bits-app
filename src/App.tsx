import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => setDarkModeActivation(darkMode), [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Main />

      <Footer />
    </>
  );
}

export default App;
