import React from "react";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import AnimatedSection from "@/components/layout/AnimatedSection";
import HeadingSection from "./HeadingSection";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "24+ Years of Excellence",
    description:
      "With over two decades of experience, we bring proven expertise to every project.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "200+ Satisfied Clients",
    description:
      "Our commitment to quality has earned the trust of clients across Nigeria.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "260+ Projects Completed",
    description:
      "A track record of successful project delivery across multiple industries.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and consistently deliver on time.",
  },
];

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary-30 bg-white p-6 transition-all duration-300 hover:border-secondary-base md:p-8">
      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary-base transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-10 text-primary-base transition-colors duration-300 group-hover:bg-secondary-base/10 group-hover:text-secondary-base">
        {benefit.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-neutral-base transition-colors duration-300 group-hover:text-primary-base md:text-xl">
        {benefit.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-50 md:text-base">
        {benefit.description}
      </p>
    </div>
  );
};

const ServiceBenefits: React.FC = () => {
  return (
    <AnimatedSection>
      <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <HeadingSection
          title="Why Choose Us"
          subtitle="What Sets Us Apart"
          description="Our commitment to excellence, combined with years of experience and a proven track record, makes us the ideal partner for your projects."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ServiceBenefits;
