import Logo from "./Logo";

interface footerProps {
  darkMode: boolean;
}

function Footer({ darkMode }: footerProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-wrap justify-center overflow-hidden my-auto">
      <div className="footer-flex-container">
        <div className="column">
          <h2 className="footer-heading">Shop</h2>
          <ul role="list" className="w-list-unstyled">
            <li>
              <a
                href="/"
                aria-current="page"
                className="footer-link w--current"
              >
                Home
              </a>
            </li>
          </ul>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a href="/category/products" className="footer-link">
                  Products
                </a>
              </div>
              <div role="listitem" className="w-dyn-item">
                <a href="/category/docs" className="footer-link">
                  docs
                </a>
              </div>

              <div role="listitem" className="w-dyn-item">
                <a href="/category/keycaps" className="footer-link">
                  Keycaps
                </a>
              </div>

              <div role="listitem" className="w-dyn-item">
                <a href="/category/group-buy" className="footer-link">
                  Group Buy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <h2 className="footer-heading">Company</h2>
          <ul role="list" className="w-list-unstyled">
            <li>
              <a href="/about" className="footer-link">
                Who we are
              </a>
            </li>
            <li>
              <a href="/shipping-handling" className="footer-link">
                Shipping &amp; Handling
              </a>
            </li>
            <li>
              <a href="/return-policy" className="footer-link">
                Return Policy
              </a>
            </li>
            <li>
              <a href="/service-terms" className="footer-link">
                Service Terms
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h2 className="footer-heading">For Customers</h2>
          <ul role="list" className="w-list-unstyled">
            <li>
              <a href="/product-updates" className="footer-link">
                Product Updates
              </a>
            </li>
            <li>
              <a href="/support" className="footer-link">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h2 className="footer-heading">Social</h2>
          <ul role="list" className="w-list-unstyled">
            <li className="hidden">
              <a
                href="https://discord.gg/"
                target="_blank"
                className="footer-link"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/16bits_in"
                target="_blank"
                className="footer-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/16bits.in"
                target="_blank"
                className="footer-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/16bits_in"
                target="_blank"
                className="footer-link"
              >
                X
              </a>
            </li>
          </ul>
        </div>

        <div className="column text-center">
          <a href="/" aria-current="page" className="w-inline-block w--current">
            <div className="link-hidden">Return to Index</div>
            <div>
              <Logo darkMode={darkMode} />
            </div>
          </a>
        </div>
      </div>

      <div className="text-center w-embed w-script">
        Copyright © <span id="year">{currentYear}</span> 16-Bits™ Ltd. Co. All
        rights reserved.
      </div>
    </div>
  );
}

export default Footer;
