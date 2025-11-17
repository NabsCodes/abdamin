import React from "react";
import {
  Search,
  FileText,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/layout/AnimatedSection";
import HeadingSection from "./HeadingSection";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: <Search className="h-6 w-6" />,
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your needs, goals, and challenges through detailed consultation and analysis.",
  },
  {
    number: "02",
    icon: <FileText className="h-6 w-6" />,
    title: "Proposal & Planning",
    description:
      "Our team develops a comprehensive proposal tailored to your requirements with clear timelines and deliverables.",
  },
  {
    number: "03",
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnership & Agreement",
    description:
      "We establish a collaborative partnership with clear communication channels and mutual commitment to success.",
  },
  {
    number: "04",
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Execution & Delivery",
    description:
      "With precision and expertise, we execute the project while maintaining quality standards and meeting deadlines.",
  },
];

const ProcessStepCard: React.FC<{ step: ProcessStep }> = ({ step }) => {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-primary-30 bg-white p-6 transition-all duration-300 hover:border-secondary-base md:p-8">
      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary-base transition-all duration-500 group-hover:w-full" />

      {/* Step Number */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-4xl font-bold text-primary-10 transition-colors duration-300 group-hover:text-primary-20 md:text-5xl">
          {step.number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-10 text-primary-base transition-colors duration-300 group-hover:bg-secondary-base/10 group-hover:text-secondary-base">
          {step.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-neutral-base transition-colors duration-300 group-hover:text-primary-base md:text-xl">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-50 md:text-base">
        {step.description}
      </p>
    </div>
  );
};

const OurProcess: React.FC = () => {
  return (
    <AnimatedSection>
      <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 pt-16 sm:px-6 lg:px-8">
        <HeadingSection
          title="Process"
          subtitle="How We Work"
          description="Our proven methodology ensures every project is delivered with excellence, from initial consultation to final execution."
        />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex h-full">
              <ProcessStepCard step={step} />
              {/* Connector Arrow (hidden on last item and on mobile) */}
              {index < processSteps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block xl:-right-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary-30 transition-all duration-300">
                    <ArrowRight
                      className="h-5 w-5 text-primary-base"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default OurProcess;
