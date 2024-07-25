const PlusSvg = ({ className = "" }) => {
  return (
    <svg className={`${className} || ""`} width="11" height="11" fill="none">
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ddc7a1"
      />
    </svg>
  );
};

interface sectionSvgProps {
  crossesOffset?: string;
}

const SectionSvg = ({ crossesOffset }: sectionSvgProps) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${crossesOffset && crossesOffset
          } pointer-events-none md:block lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${crossesOffset && crossesOffset
          } pointer-events-none md:block lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

interface sectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
  children: React.ReactNode;
}

function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: sectionProps) {
  return (
    <div
      id={id}
      className={`
      relative 
      ${customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-base pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-base pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-base ${crossesOffset && crossesOffset
              } pointer-events-none md:block lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
}

export default Section;