import { Link } from "react-router-dom";
import { socials } from "../constants/socials";
import Logo from "./Logo";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="flex flex-col px-5 justify-center py-[1rem] max-lg:py-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-[1rem] text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-[1rem] font-bold text-black-absolute dark:text-white-absolute mb-[0.5rem] md:mb-0">
            16bits
          </p>
          <p className="text-[0.875rem] text-black-absolute dark:text-white-absolute mb-[0.5rem] md:mb-0 md:ml-[1rem]">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-[1rem] mt-[1rem] md:mt-0">
          {socials.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[2.5rem] h-[2.5rem] transition-transform hover:scale-110"
            >
              <span
                dangerouslySetInnerHTML={{ __html: item.icon }}
                className="w-full h-full text-[2.5rem]"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-[1rem]">
        <Logo className="w-[4rem] h-[4rem]" />
      </div>
    </Section>
  );
};

export default Footer;
