import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Store Maintenance", href: "#services" },
      { name: "Performance Optimization", href: "#services" },
      { name: "Analytics Setup", href: "#services" },
      { name: "A/B Testing", href: "#services" },
      { name: "Custom Shopify Apps", href: "#services" },
      { name: "CRO & SEO Package", href: "#services" },
    ],
    company: [
      { name: "Services", href: "#services" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      {
        name: "LinkedIn",
        href: "https://linkedin.com/turboecom/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              TurboEcom
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Empowering Shopify stores with data-driven solutions for
              sustainable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:contact@turboecom.com"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  contact@turboecom.com
                </a>
              </li>
              <li className="flex space-x-4">
                {links.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Your Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
