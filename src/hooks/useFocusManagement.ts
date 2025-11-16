import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to manage focus restoration on route changes
 * Improves accessibility for keyboard users
 */
export const useFocusManagement = () => {
  const location = useLocation();
  const previousPathRef = useRef<string>(location.pathname);

  useEffect(() => {
    // Only restore focus if pathname changed
    if (previousPathRef.current !== location.pathname) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        // Try to focus main content
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
          // Focus without causing page scroll jump
          mainContent.focus({ preventScroll: true });
          // Remove focus after setting it (for screen readers)
          mainContent.blur();
        }
      }, 100);

      previousPathRef.current = location.pathname;

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
};

/**
 * Hook to create a focus trap for modals/dialogs
 */
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Store the previously focused element
    previousActiveElementRef.current = document.activeElement as HTMLElement;

    // Focus the first focusable element in the container
    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    if (firstElement) {
      firstElement.focus();
    }

    // Handle keyboard navigation
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !containerRef.current) return;

      const focusableElements = Array.from(
        containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ) as HTMLElement[];

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
      // Restore focus to previous element
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
};
