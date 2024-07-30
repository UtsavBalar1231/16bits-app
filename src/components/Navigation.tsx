import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation, NavigationItem } from '../constants/navigation'
import { menuSlide, slide, scale } from './Animation'
import Curve from './Curve'
import NavFooter from './NavFooter'


function Navigation() {
    const [selectedIndicator, setSelectedIndicator] = useState(window.location.pathname);

    useEffect(() => {
        setSelectedIndicator(window.location.pathname);
    }, []);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="fixed right-0 top-0 h-screen bg-black-absolute text-white dark:bg-white-absolute dark:text-black">
            <div className="box-border h-full p-24 flex flex-col justify-between">
                <div onMouseLeave={() => { setSelectedIndicator(window.location.pathname) }} className="flex flex-col text-4xl gap-3 mt-20">
                    <div className="border-b uppercase text-xs mb-[1rem]">
                        <p>Navigation</p>
                    </div>
                    {navigation.map((item: NavigationItem) => (
                        <motion.div className="relative flex items-center" onMouseEnter={() => { setSelectedIndicator(item.url) }} custom={item.id} variants={slide} initial="initial" animate="enter" exit="exit">
                            <motion.div variants={scale} animate={selectedIndicator == item.url ? "open" : "closed"} className="w-[40px] h-[40px] bg-white rounded-2xl left-[-30px]">
                            </motion.div>
                            <Link
                                key={item.id}
                                to={item.url}
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