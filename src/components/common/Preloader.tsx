import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import logo from "@/assets/svg/Logo.svg";

interface PreloaderProps {
  onSkip?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onSkip }) => {
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30);

    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(skipTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-10/20 to-white"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary.base/0.08)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative flex w-full max-w-[560px] flex-col items-center px-6">
        {/* Skip button */}
        {showSkip && onSkip && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="absolute -top-16 right-6 flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 text-sm text-primary-base shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
            onClick={onSkip}
            aria-label="Skip intro animation"
          >
            Skip <X className="h-3.5 w-3.5" />
          </motion.button>
        )}

        {/* Logo container with subtle decoration */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex h-16 items-center justify-center sm:h-20"
          >
            <img
              src={logo}
              alt="Abdamin International Limited"
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full space-y-6"
        >
          {/* Progress text */}
          <div className="flex items-center justify-between px-1 text-sm">
            <span className="font-medium text-primary-base/90">
              Preparing your experience
            </span>
            <span className="font-mono text-primary-base/80">
              {progress < 10 ? `0${progress}` : progress}%
            </span>
          </div>

          {/* Progress bar container */}
          <div className="h-1 w-full overflow-hidden rounded-full bg-primary-base/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full origin-left bg-primary-base"
            />
          </div>
        </motion.div>

        {/* Company description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-xl font-semibold text-primary-base sm:text-2xl">
            Empowering Progress
          </h2>
          <p className="mt-2 text-sm text-primary-base/70 sm:text-base">
            Through Innovative Solutions Across Industries
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
