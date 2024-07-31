import { preloader } from "./Animation";
import Logo from "./Logo";
import { motion } from "framer-motion";

const PreLoader = () => {
    return (
        <motion.div
            className="h-full max-h-full w-full bg-white-absolute dark:bg-black-absolute fixed bottom-0 left-0 right-0 z-[9999] flex justify-center items-center overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={preloader}
        >
            <Logo className="w-[12rem] h-[12rem]"></Logo>
        </motion.div>
    );
};

export default PreLoader
