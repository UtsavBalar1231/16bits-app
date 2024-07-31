import Logo from "./Logo";
import Section from "./Section";
import NavFooter from "./NavFooter";

const Footer = () => {
  return (
    <Section className="flex flex-col px-5 max-lg:py-4 relative py-10 lg:py-16 xl:py-20 px-5 justify-center py-[1rem] max-lg:py-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-[1rem] text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-[1rem] font-bold text-black-absolute dark:text-white-absolute mb-[0.5rem] md:mb-0">
            16bits
          </p>
          <p className="text-[0.875rem] text-black-absolute dark:text-white-absolute mb-[0.5rem] md:mb-0 md:ml-[1rem]">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <NavFooter />
      </div>
      <div className="flex justify-center md:justify-end mt-[1rem]">
        <Logo className="w-[4rem] h-[4rem]" />
      </div>
    </Section>
  );
};

export default Footer;
