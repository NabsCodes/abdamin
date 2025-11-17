import AnimatedSection from "@/components/layout/AnimatedSection";

type HeadingSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const HeadingSection = ({
  title,
  subtitle,
  description,
}: HeadingSectionProps) => {
  return (
    <AnimatedSection>
      <div className="mx-auto flex max-w-[1048px] flex-col items-center gap-6">
        {/* Title with Accent Lines */}
        <div className="flex items-center gap-3">
          <div
            className="h-px w-12 bg-secondary-base transition-all duration-500 md:w-16"
            aria-hidden="true"
          />
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-40 md:text-base">
            {title}
          </p>
          <div
            className="h-px w-12 bg-secondary-base transition-all duration-500 md:w-16"
            aria-hidden="true"
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-center text-[32px] font-bold leading-tight text-neutral-base md:text-[52px]">
          {subtitle}
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-center text-base font-medium leading-relaxed text-neutral-50 md:text-lg">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
};

export default HeadingSection;
