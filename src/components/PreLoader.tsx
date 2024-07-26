import Logo from "./Logo"
    ;
const PreLoader = () => {
    return (
        <div className="h-full max-h-full w-full bg-white-absolute dark:bg-black-absolute fixed bottom-0 left-0 right-0 z-[9999] flex justify-center items-center overflow-hidden">
            <div className="flex items-center justify-between overflow-hidden h-15 w-[16rem] text-xl text-base dark:text-background">
                <Logo className="w-[4rem] h-[4rem]"></Logo>
            </div>
        </div>
    )
}

export default PreLoader