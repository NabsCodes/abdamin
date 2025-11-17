import React from "react";
import { Link } from "react-router-dom";
import { Project } from "@/utils/projectData";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { MapPin, Calendar, Briefcase, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-neutral-20 bg-white transition-all duration-300 hover:border-primary-30">
      {/* Image Container with Overlay */}
      <figure className="relative h-[280px] w-full overflow-hidden bg-neutral-20">
        {project.mainImage ? (
          <>
            <OptimizedImage
              src={project.mainImage}
              alt={`${project.title} - ${project.service} project in ${project.location}`}
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={400}
              height={280}
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-primary-base/0 transition-all duration-300 group-hover:bg-primary-base/5" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-20">
            <Briefcase
              className="h-12 w-12 text-neutral-30"
              aria-hidden="true"
            />
            <span className="sr-only">No image available</span>
          </div>
        )}

        {/* Service Badge */}
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary-base backdrop-blur-sm">
            <Briefcase className="h-3 w-3" aria-hidden="true" />
            {project.service}
          </span>
        </div>
      </figure>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <header className="mb-4 flex-1">
          <h2 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-neutral-base transition-colors duration-200 group-hover:text-primary-base">
            {project.title}
          </h2>
          <p className="line-clamp-3 text-[15px] leading-relaxed text-neutral-40">
            {project.description}
          </p>
        </header>

        {/* Metadata Grid */}
        <dl className="mb-5 space-y-2.5 border-t border-neutral-20 pt-4">
          <div className="flex items-start gap-3">
            <dt className="flex items-center gap-2 text-sm font-medium text-neutral-40">
              <MapPin
                className="h-4 w-4 flex-shrink-0 text-primary-base"
                aria-hidden="true"
              />
              <span className="sr-only">Location:</span>
            </dt>
            <dd className="flex-1 text-sm font-semibold text-neutral-base">
              {project.location}
            </dd>
          </div>

          <div className="flex items-start gap-3">
            <dt className="flex items-center gap-2 text-sm font-medium text-neutral-40">
              <Calendar
                className="h-4 w-4 flex-shrink-0 text-primary-base"
                aria-hidden="true"
              />
              <span className="sr-only">Date:</span>
            </dt>
            <dd className="flex-1 text-sm font-semibold text-neutral-base">
              {project.date}
            </dd>
          </div>
        </dl>

        {/* CTA */}
        <footer>
          <Link
            to={`/portfolio/${project.id}`}
            className="group/link flex w-full items-center justify-center gap-2 rounded-xl bg-primary-base px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-primary-60 focus:outline-none focus:ring-2 focus:ring-primary-base focus:ring-offset-2"
            aria-label={`View details about ${project.title}`}
          >
            <span>View Project Details</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
