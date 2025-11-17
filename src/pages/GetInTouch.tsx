import SEO from "@/components/layout/SEO";
import getInTouchImage from "@/assets/images/contact-us.webp";
import Hero from "@/components/layout/Hero";
import ContactForm from "@/components/common/ContactForm";
import ContactDetails from "@/components/common/ContactDetails";
import AnimatedSection from "@/components/layout/AnimatedSection";

const GetInTouch: React.FC = () => {
  return (
    <>
      <SEO
        title="Get In Touch"
        description="Contact Abdamin International Limited - We're here to assist you with our products and services"
        keywords={["contact", "get in touch", "support", "customer service"]}
        ogUrl="https://www.abdamin.com/get-in-touch"
      />
      {/* Get In Touch page content */}
      <Hero
        title="Get In Touch"
        subtitle="Reach out to us via email, phone, or visit any of our locations in Adamawa, Abuja, Lagos, and Kaduna. We're here to help."
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={getInTouchImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover bg-center md:h-[650px]"
      />
      <AnimatedSection>
        <section className="mx-auto flex max-w-8xl flex-col gap-12 px-4 pb-16 sm:px-6 lg:px-8">
          {/* Simple Header Section */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div
                className="h-px w-12 bg-secondary-base transition-all duration-500 md:w-16"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-40 md:text-base">
                Contact Us
              </p>
              <div
                className="h-px w-12 bg-secondary-base transition-all duration-500 md:w-16"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-3xl font-bold leading-tight text-neutral-base md:text-4xl">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-base leading-relaxed text-neutral-50 md:text-lg">
              Get in touch using the form or contact details below. We typically
              respond within 24 hours.
            </p>
          </div>

          {/* Contact Form and Details */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ContactDetails className="order-2" />
            <ContactForm className="order-1" />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default GetInTouch;
