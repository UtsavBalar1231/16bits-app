interface menuSvgProps {
  openNavigation: boolean;
}

function MenuSvg({ openNavigation }: menuSvgProps) {
  return !openNavigation ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
    >
      <rect x="2" y="3" width="12" height="1" />
      <rect x="2" y="4" width="12" height="1" />

      <rect x="2" y="7" width="12" height="1" />
      <rect x="2" y="8" width="12" height="1" />

      <rect x="2" y="11" width="12" height="1" />
      <rect x="2" y="12" width="12" height="1" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
    >
      <rect x="1" y="1" width="1" height="1" />
      <rect x="2" y="1" width="1" height="1" />
      <rect x="13" y="1" width="1" height="1" />
      <rect x="14" y="1" width="1" height="1" />
      <rect x="1" y="2" width="1" height="1" />
      <rect x="2" y="2" width="1" height="1" />
      <rect x="3" y="2" width="1" height="1" />
      <rect x="12" y="2" width="1" height="1" />
      <rect x="13" y="2" width="1" height="1" />
      <rect x="14" y="2" width="1" height="1" />
      <rect x="2" y="3" width="1" height="1" />
      <rect x="3" y="3" width="1" height="1" />
      <rect x="4" y="3" width="1" height="1" />
      <rect x="11" y="3" width="1" height="1" />
      <rect x="12" y="3" width="1" height="1" />
      <rect x="13" y="3" width="1" height="1" />
      <rect x="3" y="4" width="1" height="1" />
      <rect x="4" y="4" width="1" height="1" />
      <rect x="5" y="4" width="1" height="1" />
      <rect x="10" y="4" width="1" height="1" />
      <rect x="11" y="4" width="1" height="1" />
      <rect x="12" y="4" width="1" height="1" />
      <rect x="4" y="5" width="1" height="1" />
      <rect x="5" y="5" width="1" height="1" />
      <rect x="6" y="5" width="1" height="1" />
      <rect x="9" y="5" width="1" height="1" />
      <rect x="10" y="5" width="1" height="1" />
      <rect x="11" y="5" width="1" height="1" />
      <rect x="5" y="6" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
      <rect x="7" y="6" width="1" height="1" />
      <rect x="8" y="6" width="1" height="1" />
      <rect x="9" y="6" width="1" height="1" />
      <rect x="10" y="6" width="1" height="1" />
      <rect x="6" y="7" width="1" height="1" />
      <rect x="7" y="7" width="1" height="1" />
      <rect x="8" y="7" width="1" height="1" />
      <rect x="9" y="7" width="1" height="1" />
      <rect x="6" y="8" width="1" height="1" />
      <rect x="7" y="8" width="1" height="1" />
      <rect x="8" y="8" width="1" height="1" />
      <rect x="9" y="8" width="1" height="1" />
      <rect x="5" y="9" width="1" height="1" />
      <rect x="6" y="9" width="1" height="1" />
      <rect x="7" y="9" width="1" height="1" />
      <rect x="8" y="9" width="1" height="1" />
      <rect x="9" y="9" width="1" height="1" />
      <rect x="10" y="9" width="1" height="1" />
      <rect x="4" y="10" width="1" height="1" />
      <rect x="5" y="10" width="1" height="1" />
      <rect x="6" y="10" width="1" height="1" />
      <rect x="9" y="10" width="1" height="1" />
      <rect x="10" y="10" width="1" height="1" />
      <rect x="11" y="10" width="1" height="1" />
      <rect x="3" y="11" width="1" height="1" />
      <rect x="4" y="11" width="1" height="1" />
      <rect x="5" y="11" width="1" height="1" />
      <rect x="10" y="11" width="1" height="1" />
      <rect x="11" y="11" width="1" height="1" />
      <rect x="12" y="11" width="1" height="1" />
      <rect x="2" y="12" width="1" height="1" />
      <rect x="3" y="12" width="1" height="1" />
      <rect x="4" y="12" width="1" height="1" />
      <rect x="11" y="12" width="1" height="1" />
      <rect x="12" y="12" width="1" height="1" />
      <rect x="13" y="12" width="1" height="1" />
      <rect x="1" y="13" width="1" height="1" />
      <rect x="2" y="13" width="1" height="1" />
      <rect x="3" y="13" width="1" height="1" />
      <rect x="12" y="13" width="1" height="1" />
      <rect x="13" y="13" width="1" height="1" />
      <rect x="14" y="13" width="1" height="1" />
      <rect x="1" y="14" width="1" height="1" />
      <rect x="2" y="14" width="1" height="1" />
      <rect x="13" y="14" width="1" height="1" />
      <rect x="14" y="14" width="1" height="1" />
    </svg>

  );
}

export default MenuSvg;
