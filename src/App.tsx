import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "@/Router";
import Preloader from "@/components/common/Preloader";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Create a React Query client with default options
// Created outside component to avoid recreating on every render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Don't refetch on window focus in production
      refetchOnWindowFocus: false,
      // Retry failed requests once
      retry: 1,
      // Cache for 5 minutes
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});

const PRELOADER_SEEN_KEY = "abdamin_preloader_seen";

function App(): JSX.Element {
  // Check if user has seen preloader before
  const [loading, setLoading] = useState(() => {
    // Only show preloader if user hasn't seen it before
    const hasSeenPreloader = localStorage.getItem(PRELOADER_SEEN_KEY);
    return !hasSeenPreloader;
  });

  // Effect to handle the preloader display
  useEffect(() => {
    if (loading) {
      // Show branded preloader for a meaningful duration (reduced to 2s)
      const timer = setTimeout(() => {
        setLoading(false);
        // Mark as seen so it doesn't show again
        localStorage.setItem(PRELOADER_SEEN_KEY, "true");
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [loading]);

  // Handler for skipping the preloader
  const handleSkip = () => {
    setLoading(false);
    // Mark as seen even when skipped
    localStorage.setItem(PRELOADER_SEEN_KEY, "true");
  };

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          {loading ? (
            // Show the Preloader while loading
            <Preloader key="preloader" onSkip={handleSkip} />
          ) : (
            // Show the main app content after loading
            <motion.div
              key="router"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Router />
            </motion.div>
          )}
        </AnimatePresence>
        {/* React Query DevTools - only in development */}
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
