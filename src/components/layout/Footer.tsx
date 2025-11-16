import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Palette, Code } from "lucide-react";
import { footerInfo, navItems, socialLinks, copyRight } from "@/utils/data";
import AnimatedSection from "./AnimatedSection";
import logoWebp from "@/assets/images/Logo-white.webp";
import logoFallback from "@/assets/svg/Logo-white.svg";

const ContactItem = ({
  title,
  content,
  link,
  isEmail,
  isPhone,
}: {
  title: string;
  content: string;
  link?: string;
  isEmail?: boolean;
  isPhone?: boolean;
}) => {
  const baseClasses =
    "text-sm md:text-base text-neutral-10 transition-colors duration-300 hover:text-white";

  if (isEmail || isPhone) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-white md:text-base">{title}</p>
        <NavLink
          to={link!}
          className={`${baseClasses} hover:underline`}
          aria-label={`${isEmail ? "Email us" : "Call us"} at ${content}`}
        >
          {content}
        </NavLink>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold text-white md:text-base">{title}</p>
      <p className={baseClasses}>{content}</p>
    </div>
  );
};

const Footer = () => {
  const contactInfo = [
    {
      title: "Email address",
      content: footerInfo.email,
      link: `mailto:${footerInfo.email}`,
      isEmail: true,
    },
    {
      title: "Phone number",
      content: footerInfo.phone,
      link: `tel:${footerInfo.phone.replace(/\s+/g, "")}`,
      isPhone: true,
    },
    {
      title: "Locate us",
      content: footerInfo.address,
    },
  ];

  return (
    <AnimatedSection>
      <footer className="bottom-0 h-full bg-primary-100">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-4">
            {/* Company Info Section */}
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                {/* Logo */}
                <picture>
                  <source
                    srcSet={`${logoWebp} 1x, ${logoWebp} 2x`}
                    type="image/webp"
                  />
                  <img
                    src={logoFallback}
                    alt="Abdamin International Limited Logo"
                    width="160"
                    height="40"
                    className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
                    loading="lazy"
                  />
                </picture>

                {/* Contact Information */}
                {contactInfo.map((item) => (
                  <ContactItem key={item.title} {...item} />
                ))}

                {/* Social Links */}
                <div className="flex gap-4 text-neutral-10">
                  {socialLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.url}
                      className="transition-colors duration-300 hover:text-white"
                      aria-label={`Visit our ${link.label} page`}
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        size="lg"
                        aria-hidden="true"
                      />
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="col-span-1" aria-label="Quick links">
              <div className="flex flex-col gap-4">
                <h2 className="mt-[14px] text-sm font-semibold text-white md:text-base">
                  Quick Links
                </h2>
                {navItems.slice(0, 4).map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className="text-sm text-neutral-10 hover:text-white md:text-base"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* Separator */}
            <div className="col-span-4 mt-6 h-px w-full bg-neutral-10" />

            {/* Footer Bottom */}
            <div className="col-span-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
              {/* Copyright */}
              <p className="text-sm text-neutral-10 md:text-base">
                <span className="hidden sm:inline">Copyright </span>
                {copyRight}
                <span className="hidden lg:inline"> All Rights Reserved.</span>
              </p>

              {/* Credits */}
              <div className="flex items-center gap-2 text-sm text-neutral-10 md:text-base">
                <span>Designed by</span>
                <NavLink
                  to="https://www.behance.net/olubummokolawole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-40 hover:underline"
                  aria-label="Visit designer's portfolio"
                >
                  <Palette size={16} aria-hidden="true" />
                </NavLink>
                <span aria-hidden="true">|</span>
                <span>Developed by</span>
                <NavLink
                  to="https://nabeelhassan.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-40 hover:underline"
                  aria-label="Visit developer's GitHub"
                >
                  <Code size={16} aria-hidden="true" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
