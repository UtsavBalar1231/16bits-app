import Logo from "./Logo";
import { motion } from "framer-motion";

const variants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PreLoader = () => {
    return (
        <motion.div
            className="h-full max-h-full w-full bg-white-absolute dark:bg-black-absolute fixed bottom-0 left-0 right-0 z-[9999] flex justify-center items-center overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
        >
            <motion.div
                className="flex items-center justify-between overflow-hidden h-15 w-[16rem] text-xl text-base dark:text-background"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                exit={{ x: "-100vw" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <Logo className="w-[12rem] h-[12rem]"></Logo>
            </motion.div>
        </motion.div>
    );
};

export default PreLoader
