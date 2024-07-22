const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "News", "GitHub"],
  },
  {
    title: "Resource",
    items: ["Blog", "Docs", "Help center"],
  },
  {
    title: "Social",
    items: ["X", "Facebook", "Instagram"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="sm:w-1/2">
        {LINKS.map((link) => (
          <div
            key={link.title}
            className="sm:flex sm:items-center mb-4 sm:mb-0"
          >
            <p className="font-minecraft text-lg font-bold">{link.title}</p>
            <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300">
              {link.items.map((item) => (
                <p key={item} className="text-sm fill-default-hover leading-6">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center sm:text-right text-sm text-gray-500">
        <p>Copyright © {currentYear} 16bits. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
