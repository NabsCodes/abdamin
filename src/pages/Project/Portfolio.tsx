/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import SEO from "@/components/layout/SEO";
import portfolio from "@/assets/images/portfolio-landing.webp";
import Hero from "@/components/layout/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/utils/projectData";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioBreadcrumb from "@/components/projects/PortfolioBreadcrumb";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.service.toLowerCase() === activeCategory,
        );

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our extensive portfolio showcasing the breadth of our expertise. From iconic structures to sustainable solutions, all crafted to perfection."
        keywords={[
          "portfolio",
          "projects",
          "services",
          "Abdamin",
          "case studies",
        ]}
        ogUrl="https://www.abdamin.com/portfolio"
      />
      <Hero
        title="Portfolio"
        subtitle="Explore our diverse portfolio of projects across Nigeria, showcasing both completed works and ongoing developments."
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={portfolio}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover bg-right md:h-[650px]"
      />
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Portfolio Introduction */}
          <div className="mb-12 text-center">
            <div className="mx-auto flex max-w-3xl flex-col gap-4">
              <div className="flex items-center justify-center gap-3">
                <div
                  className="h-px w-12 bg-secondary-base md:w-16"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-40 md:text-base">
                  Featured Work
                </p>
                <div
                  className="h-px w-12 bg-secondary-base md:w-16"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-2xl font-bold text-neutral-base md:text-3xl">
                Selected Projects Showcase
              </h2>
              <p className="text-sm leading-relaxed text-neutral-50 md:text-base">
                A curated selection of our work across multiple sectors. With
                260+ completed projects and 200+ satisfied clients since 2000,
                these highlights demonstrate our commitment to excellence.
              </p>
            </div>
          </div>

          <PortfolioBreadcrumb
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          {filteredProjects.length > 0 ? (
            <Carousel className="mx-auto w-full max-w-7xl">
              <CarouselContent className="p-4">
                {filteredProjects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="basis-full pl-4 last:pr-4 sm:basis-1/2 xl:mx-auto xl:basis-1/3"
                  >
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex items-center justify-center gap-4">
                <CarouselPrevious className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
                <CarouselNext className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
              </div>
            </Carousel>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center py-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Building2 className="mb-4 h-16 w-16 text-primary-base" />
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                No Projects Yet
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                We don't have any projects in this category yet, but we're
                always expanding our portfolio.
              </p>
              <p className="text-primary-base">
                Have a project in mind?{" "}
                <Link to="/get-in-touch" className="font-semibold underline">
                  Let's work together!
                </Link>
              </p>
            </motion.div>
          )}
        </section>
      </AnimatedSection>
    </>
  );
};

export default Portfolio;
