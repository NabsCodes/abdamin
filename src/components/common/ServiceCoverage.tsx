import React from "react";
import { MapPin, Globe, Building2, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/layout/AnimatedSection";
import HeadingSection from "@/components/common/HeadingSection";

interface CoverageArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const coverageAreas: CoverageArea[] = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Nationwide Reach",
    description:
      "Our services extend across Nigeria, with active operations in multiple states and regions.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Multi-Industry Expertise",
    description:
      "From construction to transportation, telecoms to energy, we serve diverse sectors nationwide.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Strategic Presence",
    description:
      "With operations in Adamawa, Abuja, Lagos, and Kaduna, we're positioned to serve clients across the country.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Proven Track Record",
    description:
      "260+ completed projects and 200+ satisfied clients demonstrate our nationwide commitment to excellence.",
  },
];

const CoverageCard: React.FC<{ coverage: CoverageArea }> = ({ coverage }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary-30 bg-white p-6 transition-all duration-300 hover:border-secondary-base md:p-8">
      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary-base transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-10 text-primary-base transition-colors duration-300 group-hover:bg-secondary-base/10 group-hover:text-secondary-base">
        {coverage.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-neutral-base transition-colors duration-300 group-hover:text-primary-base md:text-xl">
        {coverage.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-50 md:text-base">
        {coverage.description}
      </p>
    </div>
  );
};

const ServiceCoverage: React.FC = () => {
  return (
    <AnimatedSection>
      <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 pt-16 sm:px-6 lg:px-8">
        <HeadingSection
          title="Coverage"
          subtitle="Our Service Reach"
          description="With operations spanning multiple states and industries, we're committed to delivering excellence wherever you need us."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coverageAreas.map((coverage, index) => (
            <CoverageCard key={index} coverage={coverage} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ServiceCoverage;
