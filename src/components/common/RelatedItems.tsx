import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/utils/data";

interface RelatedItem {
  id: string;
  title: string;
  link: string;
  type: "service" | "project";
}

interface RelatedItemsProps {
  items?: RelatedItem[];
  title?: string;
  currentServiceTitle?: string;
  type?: "service" | "project";
}

const RelatedItems: React.FC<RelatedItemsProps> = ({
  items,
  title = "Related Items",
  currentServiceTitle,
  type = "service",
}) => {
  // If items are provided, use them. Otherwise, generate from servicesData
  const displayItems = useMemo(() => {
    if (items && items.length > 0) {
      return items;
    }

    if (type === "service" && currentServiceTitle) {
      // Get all services except the current one
      const availableServices = servicesData.filter(
        (service) => service.title !== currentServiceTitle,
      );

      // Shuffle and take 3 random services
      const shuffled = [...availableServices].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3).map((service, index) => ({
        id: `service-${index}`,
        title: service.title,
        link: service.link,
        type: "service" as const,
      }));
    }

    return [];
  }, [items, currentServiceTitle, type]);

  if (displayItems.length === 0) return null;

  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-6 px-4 pt-12 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div
          className="h-px w-12 bg-secondary-base transition-all duration-500 md:w-16"
          aria-hidden="true"
        />
        <h2 className="text-2xl font-bold text-neutral-base md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-primary-30 bg-white p-4 transition-all duration-300 hover:border-secondary-base md:p-6"
          >
            {/* Left Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-xl bg-primary-30 transition-all duration-300 group-hover:w-1 group-hover:bg-secondary-base" />

            <div className="flex-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary-40">
                {item.type}
              </span>
              <h3 className="text-lg font-bold text-neutral-base transition-colors duration-300 group-hover:text-primary-base">
                {item.title}
              </h3>
            </div>

            <ArrowUpRight
              className="h-5 w-5 flex-shrink-0 text-primary-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedItems;
