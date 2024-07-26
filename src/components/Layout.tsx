import { Outlet } from 'react-router-dom';
import Header from './Header';
import { setDarkModeActivation } from "nes-ui-react";
import { useCallback, useEffect, useState } from "react";
import Footer from "./Footer";
import Section from "./Section";
import PreLoader from './PreLoader';

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);
    console.log('document.readyState', document.readyState);
    const [isPageLoaded, setIsPageLoaded] = useState(document.readyState === 'complete' || document.readyState === 'interactive');
    const [showPreloader, setShowPreloader] = useState(!isPageLoaded);

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

    useEffect(() => {
        const handlePageLoad = () => {
            setIsPageLoaded(true);
        };

        if (!isPageLoaded) {
            document.addEventListener('readystatechange', handlePageLoad);
        }

        return () => {
            document.removeEventListener('readystatechange', handlePageLoad);
        };
    }, [isPageLoaded]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPreloader(!isPageLoaded);
        }, 2500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isPageLoaded]);

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {/* Add a div to show the preloader while the page loads */}
            {showPreloader && <PreLoader />}

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

