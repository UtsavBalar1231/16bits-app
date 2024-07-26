import { Outlet} from 'react-router-dom';
import Header from './Header';
import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Footer from "./Footer";
import Section from "./Section";

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            setDarkModeActivation(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkModeActivation(false);
        }
    }, [darkMode]);

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Section crosses crossesOffset="translate-y-[4rem]" className="pt-[4rem] lg:pt-[4rem] overflow-hidden overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
                <div className="bg-white-absolute dark:bg-black-absolute relative h-full overflow-y-auto bg-[linear-gradient(to_right,#a8998412_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
                    <Header toggleDarkMode={toggleDarkMode} />
                    <Outlet />
                    <Footer />
                </div>
            </Section>
        </div>
    );
};

export default Layout;

