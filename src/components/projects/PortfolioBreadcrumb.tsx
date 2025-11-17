import React from "react";
import { Building2, Truck, Wifi, Droplet, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type PortfolioBreadcrumbProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const categories = [
  { name: "All", icon: Briefcase, value: "all" },
  { name: "Construction", icon: Building2, value: "construction" },
  { name: "Transportation", icon: Truck, value: "transportation" },
  { name: "Telecoms", icon: Wifi, value: "telecoms" },
  { name: "Gauni Water", icon: Droplet, value: "gauni water" },
];

const PortfolioBreadcrumb: React.FC<PortfolioBreadcrumbProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <nav className="mb-8 overflow-x-auto" aria-label="Portfolio categories">
      <ul className="flex gap-3 whitespace-nowrap p-1">
        {categories.map((category) => (
          <li key={category.name}>
            <motion.button
              tabIndex={0}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`group relative flex items-center gap-2 overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:px-5 md:py-3 md:text-base ${
                activeCategory === category.value
                  ? "border-primary-base bg-primary-base text-white shadow-md"
                  : "border-primary-30 bg-white text-neutral-base hover:border-secondary-base hover:bg-primary-10/30"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active indicator line */}
              {activeCategory === category.value && (
                <motion.div
                  className="absolute left-0 top-0 h-full w-1 bg-secondary-base"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <category.icon
                className={`h-4 w-4 transition-transform duration-300 md:h-5 md:w-5 ${
                  activeCategory === category.value
                    ? ""
                    : "group-hover:scale-110"
                }`}
              />
              <span>{category.name}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortfolioBreadcrumb;
