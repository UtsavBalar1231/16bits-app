import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation, NavigationItem } from '../constants/navigation'
import { menuSlide, slide, scale } from './Animation'
import Curve from './Curve'
import NavFooter from './NavFooter'

function Navigation() {
    const pathname: string = window.location.pathname;
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    useEffect(() => {
        setSelectedIndicator(pathname);
    }, []);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="fixed right-0 top-0 h-screen bg-black-absolute text-white dark:bg-white-absolute dark:text-black">
            <div className="box-border h-full p-[6rem] flex flex-col justify-between">
                <div onMouseLeave={() => { setSelectedIndicator(window.location.pathname) }} className="flex flex-col text-6xl gap-2 mt-[5rem]">
                    <div className="border-b border-white dark:border-black uppercase text-sm mb-[1rem] font-minecraft p-[0.5rem]">
                        <p>Navigation</p>
                    </div>
                    {navigation.map((item: NavigationItem, _index: number) => (
                        <motion.div className="relative flex items-center" onMouseEnter={() => { setSelectedIndicator(item.url) }} custom={item.id} variants={slide} initial="initial" animate="enter" exit="exit">
                            <motion.div variants={scale} animate={selectedIndicator == item.url ? "open" : "closed"} className="w-[0.5rem] h-[0.5rem] bg-code-09 dark:bg-code-18 rounded-full absolute right-[1rem]">
                            </motion.div>
                            <Link
                                key={item.id}
                                to={item.url}
                                className='no-underline text-white hover:text-code-09 dark:text-black-absolute dark:hover:text-code-18 transition-colors text-3xl font-minecraft p-[0.5rem]'
                            >
                                {item.title}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <NavFooter />
            </div>
            <Curve />
        </motion.div>
    )
}

export default Navigation