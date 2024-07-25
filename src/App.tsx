import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);

  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      setDarkModeActivation(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkModeActivation(false);
    }
  }, [darkMode]);

  return (
    <>
      <Section crosses crossesOffset="translate-y-[4rem]" className="pt-[4rem] lg:pt-[4rem] overflow-hidden overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
        <div
          className="bg-white-absolute dark:bg-black-absolute relative h-full overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
        >
          <Header toggleDarkMode={toggleDarkMode} />
          <Hero />
          <Footer />
        </div>
      </Section>
    </>
  );
}

export default App;
