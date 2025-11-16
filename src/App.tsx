import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Router from "./Router";
import Preloader from "./components/common/Preloader";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App(): JSX.Element {
  // State to control whether the preloader is shown
  const [loading, setLoading] = useState(true);

  // Effect to handle the preloader display
  useEffect(() => {
    if (loading) {
      // Show branded preloader for a meaningful duration
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500); // 2.5s for the branded experience

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [loading]);

  // Handler for skipping the preloader
  const handleSkip = () => {
    setLoading(false);
  };

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
