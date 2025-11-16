import { useState, useEffect, useMemo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ScrollToBottomButton from "@/components/ui/ScrollToBottom";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

type HeroProps = {
  title?: string;
  subtitle?: string;
  subtitleClassName?: string;
  backgroundImage: string;
  link?: string;
  className?: string;
  linkClassName?: string;
  text?: string;
  titleClassName?: string;
};

const Hero = ({ title, ...props }: HeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Memoize background image style
  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage: imageLoaded ? `url(${props.backgroundImage})` : "none",
    }),
    [imageLoaded, props.backgroundImage],
  );

  useEffect(() => {
    const img = new Image();
    img.src = props.backgroundImage;

    // If the image is already cached, it might load immediately
    if (img.complete) {
      handleImageLoad();
    } else {
      img.onload = handleImageLoad;
      img.onerror = () => {
        // Handle image load error gracefully
        console.warn("Failed to load hero image:", props.backgroundImage);
      };
    }

    // Preload the image using link preload
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = props.backgroundImage;
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      img.onload = null;
      img.onerror = null;
    };
  }, [props.backgroundImage, handleImageLoad]);

  return (
    <AnimatedSection>
      <section
        className={cn(
          props.className,
          "-translate-y-[85px] bg-cover text-neutral-base md:top-[52px]",
          "overflow-hidden",
          imageLoaded ? "bg-center bg-no-repeat" : "",
        )}
        style={backgroundImageStyle}
        role="banner"
        aria-label="Hero section"
      >
        {!imageLoaded && (
          <div
            className="absolute inset-0 animate-pulse bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative mx-auto flex max-w-8xl flex-col gap-6 px-4 py-32 sm:px-6 sm:py-36 md:py-40 lg:px-8">
          <h1
            className={cn(
              "text-3xl font-bold tracking-wide sm:text-4xl lg:text-6xl",
              props.titleClassName,
            )}
          >
            {title}
          </h1>
          {props.subtitle && (
            <p
              className={cn(
                "text-md max-w-5xl md:text-xl",
                props.subtitleClassName,
              )}
            >
              {props.subtitle}
            </p>
          )}
          {props.link && props.text && (
            <NavLink
              className={cn(props.linkClassName, "btn btn-primary w-fit")}
              to={props.link}
              aria-label={`${props.text} - Navigate to ${props.link}`}
            >
              {props.text}
            </NavLink>
          )}
          <ScrollToBottomButton />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Hero;
