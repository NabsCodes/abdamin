import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import upcoming from "@/assets/images/upcoming.webp";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { useState, useEffect, useMemo, useCallback } from "react";

const UpcomingProject = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage: imageLoaded ? `url(${upcoming})` : "none",
    }),
    [imageLoaded],
  );

  useEffect(() => {
    const img = new Image();
    img.src = upcoming;

    if (img.complete) {
      handleImageLoad();
    } else {
      img.onload = handleImageLoad;
      img.onerror = () => {
        console.warn("Failed to load upcoming project image");
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [handleImageLoad]);

  return (
    <AnimatedSection>
      <section className="relative mx-auto max-w-8xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div
          className="group relative flex w-full overflow-hidden rounded-2xl bg-neutral-base bg-cover bg-center transition-transform duration-700 hover:scale-[1.01]"
          style={backgroundImageStyle}
        >
          {/* Loading State */}
          {!imageLoaded && (
            <div
              className="absolute inset-0 animate-pulse bg-neutral-50"
              aria-hidden="true"
            />
          )}

          {/* Subtle Overlay - Allows background image to show through */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-base/85 via-neutral-base/60 to-neutral-base/40" />

          {/* Content Container - Centered */}
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:px-8 sm:py-16 md:gap-8 md:py-20 lg:px-12">
            {/* Top Accent Line - Centered */}
            <div className="h-0.5 w-12 bg-secondary-base transition-all duration-500 md:w-16" />

            {/* Overline */}
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-30 sm:text-base">
              Have an Upcoming Project?
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Let&apos;s Build Something Great Together
            </h2>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              Explore how Abdamin can turn your vision into reality with our
              expertise and dedication to excellence.
            </p>

            {/* CTA Button */}
            <NavLink
              to="/get-in-touch"
              className="group mt-4 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:gap-3 hover:border-secondary-base hover:bg-secondary-base hover:shadow-lg hover:shadow-secondary-base/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-base"
              aria-label="Get in touch to discuss your project"
            >
              <span>Get in touch</span>
              <ArrowUpRight
                className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
                strokeWidth={2.5}
              />
            </NavLink>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default UpcomingProject;
