import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group relative block overflow-hidden rounded-2xl border border-neutral-20 transition-all duration-300 hover:border-primary-30 focus:outline-none focus:ring-2 focus:ring-primary-base focus:ring-offset-2"
      aria-label={`${title}: ${description}. Learn more about this service.`}
    >
      {/* Image with Overlay Content */}
      <div className="relative h-[380px] overflow-hidden bg-neutral-20 md:h-[420px]">
        {/* Background Image */}
        <OptimizedImage
          src={image}
          alt={`${title} service`}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          width={600}
          height={420}
        />

        {/* Refined Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-base/95 via-neutral-base/50 to-neutral-base/10 transition-all duration-500 group-hover:from-neutral-base/90 group-hover:via-neutral-base/40" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Top Accent Line */}
          <div className="absolute left-6 top-6 h-0.5 w-12 bg-secondary-base transition-all duration-500 group-hover:w-20 md:left-8 md:top-8" />

          {/* Text Content */}
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
              {title}
            </h2>

            <p className="line-clamp-2 text-[15px] leading-relaxed text-white/90 transition-all duration-300 group-hover:text-white md:text-base">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 pt-2 text-base font-semibold text-white transition-all duration-300 group-hover:gap-3">
              <span className="transition-colors group-hover:text-secondary-base">
                Explore Service
              </span>
              <ArrowUpRight
                className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary-base"
                aria-hidden="true"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Bottom Accent Bar */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary-base transition-all duration-500 ease-out group-hover:w-full" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
