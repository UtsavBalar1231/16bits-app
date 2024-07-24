interface LogoProps {
  darkMode: boolean;
  className: string;
}

function Logo({ darkMode, className }: LogoProps) {
  const logo = `
    <path d="M848 400H928V480H768V80H848V160H928V240H848V400ZM928 400V240H1008V400H928Z"/>
    <path d="M1088 80V0H1168V80H1088ZM1168 480H1088V160H1168V480Z"/>
    <path d="M1328 400H1248V80H1328V160H1408V240H1328V400ZM1328 480V400H1408V480H1328Z"/>
    <path d="M1568 240V160H1728V240H1648V320H1488V240H1568ZM1728 400H1648V320H1728V400ZM1648 400V480H1488V400H1648Z"/>
    <path d="M0.5 477.5V428H99.5V230H50V180.5H99.5V131H198.5V428H297.5V477.5H0.5Z"/>
    <path d="M396.5 477.5V428H347V230H396.5V180.5H446V131H644V180.5H495.5V230H446V279.5H644V329H693.5V428H644V477.5H396.5ZM446 428H594.5V329H446V428Z"/>
  `;

  const handleClick = () => {
    console.log("clicked");
    window.location.href = "/";
  };

  return (
    <div onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${
          darkMode ? "fill-white-absolute" : "fill-black-absolute"
        }`}
        viewBox="0 0 2000 500"
        dangerouslySetInnerHTML={{ __html: logo }}
      />
    </div>
  );
}

export default Logo;
