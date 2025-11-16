import { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "src" | "srcSet" | "loading" | "width" | "height"
  > {
  src: string;
  alt: string;
  fallback?: string;
  blurDataURL?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Optimized Image component for Vite/React (alternative to Next.js Image)
 * Features:
 * - Lazy loading by default
 * - Blur placeholder support
 * - Error handling with fallback
 * - Responsive image support
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallback,
  blurDataURL,
  priority = false,
  sizes,
  className,
  width,
  height,
  onError,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallback && currentSrc !== fallback) {
        setCurrentSrc(fallback);
        setHasError(false);
      } else {
        setHasError(true);
        onError?.(e);
      }
    },
    [fallback, currentSrc, onError],
  );

  // Generate srcSet for responsive images if sizes is provided
  const srcSetValue = useMemo(() => {
    if (!sizes || hasError) return undefined;

    // Generate multiple sizes for responsive images
    const widths = [640, 768, 1024, 1280, 1920];
    return widths
      .map((width) => `${currentSrc}?w=${width} ${width}w`)
      .join(", ");
  }, [currentSrc, sizes, hasError]);

  if (hasError && !fallback) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-20 text-neutral-40",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder */}
      {blurDataURL && !imageLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-md"
        />
      )}

      {/* Loading skeleton */}
      {!imageLoaded && !blurDataURL && (
        <div
          className="absolute inset-0 animate-pulse bg-neutral-20"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        src={currentSrc}
        alt={alt}
        srcSet={srcSetValue}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300",
          imageLoaded ? "opacity-100" : "opacity-0",
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
