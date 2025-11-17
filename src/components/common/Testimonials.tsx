import React from "react";
import { Quote } from "lucide-react";
import HeadingSection from "@/components/common/HeadingSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Adebayo",
    company: "Nigerian Army",
    role: "Project Manager",
    quote:
      "Abdamin delivered exceptional results on our construction project. Their attention to detail and professionalism exceeded our expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "Amina Mohammed",
    company: "Lagos State Government",
    role: "Director of Infrastructure",
    quote:
      "Working with Abdamin has been a game-changer. Their innovative solutions and strategic approach have transformed our projects.",
    rating: 5,
  },
  {
    id: "3",
    name: "David Okonkwo",
    company: "Private Sector Client",
    role: "CEO",
    quote:
      "The team at Abdamin understands our business needs perfectly. Their expertise and dedication to excellence is unmatched.",
    rating: 5,
  },
  {
    id: "4",
    name: "Fatima Ibrahim",
    company: "Federal Agency",
    role: "Operations Director",
    quote:
      "Abdamin's commitment to quality and timely delivery makes them our preferred partner for all major projects.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary-30 bg-white p-6 transition-all duration-300 hover:border-secondary-base md:p-8">
      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary-base transition-all duration-500 group-hover:w-full" />

      {/* Quote Icon */}
      <div className="mb-4 flex-shrink-0">
        <Quote
          className="h-8 w-8 text-primary-30 transition-colors duration-300 group-hover:text-secondary-base"
          aria-hidden="true"
        />
      </div>

      {/* Rating */}
      <div className="mb-4 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 fill-secondary-base"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 flex-1 text-base leading-relaxed text-neutral-50 md:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="border-t border-neutral-20 pt-4">
        <p className="font-semibold text-neutral-base">{testimonial.name}</p>
        <p className="text-sm text-neutral-50">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="Testimonials"
        subtitle="What Our Clients Say"
        description="Don't just take our word for it. Here's what our partners and clients have to say about working with Abdamin."
      />

      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent className="p-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/2"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="relative inset-auto h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
            <CarouselNext className="relative inset-auto h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
