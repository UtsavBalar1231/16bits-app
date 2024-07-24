import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => setDarkModeActivation(darkMode), [darkMode]);

  return (
    <>
      <div className="pt-[4rem] lg:pt-[4rem] overflow-hidden">
        <div
          className={`${
            darkMode ? "bg-black-absolute" : "bg-white-absolute"
          } relative h-full overflow-y-auto bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]`}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          {/* <Main /> */}
          {/* <Footer darkMode={darkMode} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
