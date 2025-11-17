import React from "react";
import clsx from "clsx";

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text, className }) => {
  return (
    <div
      className={clsx(
        "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-primary-30 bg-white px-4 py-3 transition-all duration-300 hover:border-secondary-base hover:bg-primary-10/30",
        className,
      )}
    >
      {/* Left Accent Bar - Starts close to edge, expands rightward on hover */}
      <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-xl bg-primary-30 transition-all duration-300 group-hover:w-1 group-hover:bg-secondary-base" />

      {/* Icon */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 text-xs font-medium text-neutral-base transition-colors duration-300 group-hover:text-primary-base sm:text-sm">
        {text}
      </div>
    </div>
  );
};

export default FeatureItem;
