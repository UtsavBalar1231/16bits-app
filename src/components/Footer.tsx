import { Link } from "react-router-dom";
import { socials } from "../constants/socials";
import Logo from "./Logo";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="flex flex-col items-center p-[1rem]">
      <div className="flex flex-col items-center mb-[1rem] text-center">
        <Logo className="w-[4rem] h-[4rem] mr-[0.5rem]" />
        <p className="text-[0.875rem] text-black-absolute dark:text-white-absolute m-auto">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[1rem]">
        {socials.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[2.5rem] h-[2.5rem] transition-transform hover:scale-110"
          >
            <span dangerouslySetInnerHTML={{ __html: item.icon }} className="w-full h-full" />
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Footer;

