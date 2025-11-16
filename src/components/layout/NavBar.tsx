/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoWebp from "@/assets/images/Logo.webp";
import logoFallback from "@/assets/svg/Logo.svg";
import { CloseIcon, MenuIcon } from "@/components/ui/SvgIcons";
import { navItems, socialLinks, copyRight, navInfo } from "@/utils/data";
import { useMenu } from "@/context/MenuContext";
import useClickOutside from "@/hooks/useClickOutside";
import StaggeredDropDown from "@/components/ui/StaggeredDropdown";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleClickOutside = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  useClickOutside(menuRef, handleClickOutside);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 52);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location, setIsMenuOpen]);

  return (
    <>
      <nav
        className={cn("sticky top-0 z-40 transition-all duration-300", {
          "backdrop-blur-lg": isScrolled,
          "bg-neutral-10/50": isScrolled,
        })}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/">
            <picture>
              <source
                srcSet={`${logoWebp} 1x, ${logoWebp} 2x`}
                type="image/webp"
              />
              <img
                src={logoFallback}
                alt="Abdamin International Limited logo"
                width={160}
                height={40}
                className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
                loading="eager"
                decoding="async"
              />
            </picture>
          </NavLink>
          <div className="hidden items-center gap-8 md:flex lg:gap-16">
            {navItems.slice(0, -2).map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive
                      ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                      : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <StaggeredDropDown />
          </div>
          <NavLink className="btn btn-primary btn-hidden" to="/get-in-touch">
            Get in touch
          </NavLink>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={cn("md:hidden", {
              hidden: isMenuOpen,
              block: !isMenuOpen,
            })}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Content */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        navInfo={navInfo}
        socialLinks={socialLinks}
        copyRight={copyRight}
      />
    </>
  );
};

export default Navbar;
