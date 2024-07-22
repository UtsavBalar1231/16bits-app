const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
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
            <p className="text-sm font-semibold">{link.title}</p>
            <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300">
              {link.items.map((item) => (
                <p key={item} className="text-sm leading-6">
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
