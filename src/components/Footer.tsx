import { socials } from "../constants/socials";
import Logo from "./Logo";
import Section from "./Section";

function Footer() {
  return (
    <Section crosses className="p-2">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          <Logo className="w-[4rem] h-[4rem] flex" />© {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 p-[1rem]"
            >
              <span dangerouslySetInnerHTML={{ __html: item.icon }} className="w-full h-full max-w-[1rem]" />

              {/* <img src={item.icon} width={16} height={16} alt={item.title} /> */}
            </a>
          ))}
        </ul>
      </div>
    </Section>

  );
}

export default Footer;
