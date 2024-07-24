interface menuSvgProps {
  openNavigation: boolean;
}

function MenuSvg({ openNavigation}: menuSvgProps) {
  return openNavigation ? (
    <i className="nes-icon times is-small"></i>
  ) : (
    <i className="nes-icon bars is-small"></i>
  );
}

export default MenuSvg;
