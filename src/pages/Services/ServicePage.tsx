import React from "react";
import Hero from "@/components/layout/Hero";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { cn } from "@/lib/utils";

// Define the structure for each service section
interface ServiceSection {
  title: string;
  content: string | JSX.Element;
}

// Define the props for the ServicePage component
interface ServicePageProps {
  title: string;
  heroImage: string;
  heroClassName?: string;
  sections: ServiceSection[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  heroImage,
  heroClassName,
  sections,
}) => {
  return (
    <>
      {/* Hero section with dynamic title and background image */}
      <Hero
        title={title}
        titleClassName="mt-[85px] md:mt-[110px] hidden"
        backgroundImage={heroImage}
        linkClassName="btn-hidden-all"
        className={cn("h-[540px] bg-cover md:h-[650px]", heroClassName)}
        overline={title}
      />

      {/* Main content section */}
      <AnimatedSection>
        <section className="mx-auto flex max-w-8xl flex-col gap-4 px-4 sm:px-6 md:gap-8 lg:px-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Section Title with Accent */}
              <div className="flex items-center gap-3">
                <div
                  className="h-0.5 w-8 bg-secondary-base transition-all duration-500 md:w-12"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-bold text-neutral-base md:text-2xl lg:text-3xl">
                  {section.title}
                </h2>
              </div>
              {/* Section Content */}
              <div className="pl-0 md:pl-4">
                {typeof section.content === "string" ? (
                  <p className="whitespace-pre-wrap text-base leading-relaxed text-neutral-50 md:text-lg">
                    {section.content}
                  </p>
                ) : (
                  section.content
                )}
              </div>
            </div>
          ))}
        </section>
      </AnimatedSection>
    </>
  );
};

export default ServicePage;
