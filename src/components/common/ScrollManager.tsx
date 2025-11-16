import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_PREFIX = "scroll-pos";

const storageKeyFor = (key: string) => `${STORAGE_PREFIX}:${key}`;

const saveScrollPosition = (key: string) => {
  try {
    const payload = JSON.stringify({ x: window.scrollX, y: window.scrollY });
    sessionStorage.setItem(storageKeyFor(key), payload);
  } catch {
    // ignore storage failures
  }
};

const restoreScrollPosition = (key: string): boolean => {
  try {
    const raw = sessionStorage.getItem(storageKeyFor(key));
    if (!raw) return false;
    const { x, y } = JSON.parse(raw) as { x: number; y: number };
    window.scrollTo(x, y);
    return true;
  } catch {
    return false;
  }
};

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  // Disable native scroll restoration to avoid conflicts
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // On route changes: restore on POP, otherwise scroll to top (smooth)
  useEffect(() => {
    // Restore saved position when using browser back/forward
    if (navigationType === "POP") {
      const didRestore = restoreScrollPosition(location.key);
      if (didRestore) return;
    }

    // If there's a hash, try to scroll that element into view
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Default behavior on new navigations
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.key, location.hash, navigationType]);

  // Save scroll position before leaving the current route
  useEffect(() => {
    return () => {
      saveScrollPosition(location.key);
    };
  }, [location.key]);

  // Save scroll on page unload/refresh
  useEffect(() => {
    const onBeforeUnload = () => saveScrollPosition(location.key);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [location.key]);

  return null;
};

export default ScrollManager;
