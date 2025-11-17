import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeadingSection from "@/components/common/HeadingSection";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What services does Abdamin International Limited offer?",
    answer:
      "We offer comprehensive solutions including Construction, Transportation, Telecoms, Consulting Services, Solar Generation, and Gauni Water. Each division is designed to meet specific market needs with expertise and innovation.",
  },
  {
    id: "2",
    question: "How long has Abdamin been in business?",
    answer:
      "Abdamin International Limited was incorporated in November 2000, giving us over 24 years of experience in delivering innovative solutions across various industries.",
  },
  {
    id: "3",
    question: "Where are your offices located?",
    answer:
      "We have offices in Adamawa (Headquarters), Abuja, Lagos, and Kaduna. Our main office is located at 36, Bank Road, Bekaji, PMB 2106, Jimeta, Adamawa State.",
  },
  {
    id: "4",
    question: "How can I request a quote for a project?",
    answer:
      "You can request a quote by filling out our contact form, calling us at +2349123278100, or emailing us at abdaminltd@gmail.com. Our team will respond within 24 hours during business days.",
  },
  {
    id: "5",
    question: "What types of projects have you completed?",
    answer:
      "We have completed over 260 projects including construction projects for the Nigerian Army, Police School facilities, and various government and private sector initiatives across Nigeria.",
  },
  {
    id: "6",
    question: "Do you work with government agencies?",
    answer:
      "Yes, we have extensive experience working with government agencies, including the Nigerian Army, Police, and various state governments. We maintain the highest standards of compliance and quality.",
  },
];

const FAQItem: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-primary-30 bg-white transition-all duration-300 hover:border-secondary-base">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-primary-10/30"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className="pr-4 text-lg font-bold text-neutral-base md:text-xl">
          {faq.question}
        </h3>
        <ChevronDown
          className={cn(
            "h-6 w-6 flex-shrink-0 text-primary-base transition-transform duration-300",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="border-t border-neutral-20 p-6">
          <p className="text-base leading-relaxed text-neutral-50">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 pt-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="FAQ"
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our services, processes, and how we can help with your project needs."
      />

      <div className="mx-auto w-full max-w-4xl space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
