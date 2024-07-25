import { Button,  } from "nes-ui-react";
import Section from "./Section";
import { useRef } from "react";
import Logo from "./Logo";


function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="container relative p-[1rem] gap-[1rem]" ref={parallaxRef}>
        <div className="relative z-[10] sm:max-w-xl md:max-w-xl max-w-2xl mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] p-4">
          <h1 className="h1 sm:mb-6 lg:mb-8">
            Explore the most affordable&nbsp;keyboards with {` `}
            <Logo className="left-0 w-full h-[4rem] fill-code-18 dark:fill-code-18" />
          </h1>
          <p className="top-15 body-2 sm:max-w-xl md:max-w-2xl max-w-4xl mx-auto mb-6 lg:mb-8 text-black-absolute dark:text-white-absolute">
            Fully customizable mechanical keyboards for your needs, designed and manufactored in India.
          </p>
          <Button color="warning" onClick={() => window.location.href = "/products"}>
            See Catalog
          </Button> 
        </div>
      </div>
    </Section>
  );
}

export default Hero;
