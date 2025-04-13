import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  Radio,
  BrainCircuit,
  Sun,
  Droplets,
  X,
} from "lucide-react";
import logo from "../../assets/svg/Logo.svg";

// Define services with their respective icons, colors, and names
const services = [
  { icon: Building2, color: "text-yellow-500", name: "Construction" },
  { icon: Truck, color: "text-green-500", name: "Transport" },
  { icon: Radio, color: "text-blue-500", name: "Telecoms" },
  { icon: BrainCircuit, color: "text-purple-500", name: "Consults" },
  { icon: Sun, color: "text-orange-500", name: "Solar Generation" },
  { icon: Droplets, color: "text-cyan-500", name: "Gauni Water" },
];

interface PreloaderProps {
  onSkip?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onSkip }) => {
  // State to track loading progress
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  // Effect to simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1,
      );
    }, 30);

    // Show skip button after 1 second
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-primary-10 p-4"
    >
      {/* Skip button */}
      {showSkip && onSkip && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="absolute right-4 top-4 flex items-center gap-1 rounded-md bg-primary-base/10 px-3 py-1 text-sm text-primary-base transition-colors hover:bg-primary-base/20"
          onClick={onSkip}
          aria-label="Skip intro animation"
        >
          Skip <X className="h-3 w-3" />
        </motion.button>
      )}

      {/* Logo with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex h-48 w-48 items-center justify-center"
      >
        <img
          src={logo}
          alt="Abdamin International Limited"
          width={192}
          height={192}
          className="w-full object-contain"
        />
      </motion.div>

      {/* Grid of service icons */}
      <motion.div
        className="grid grid-cols-3 gap-4 sm:grid-cols-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <service.icon className={`h-8 w-8 ${service.color}`} />
            <p className="mt-1 text-center text-xs text-primary-base sm:text-sm">
              {service.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-8 h-1 w-4/5 max-w-md bg-primary-base"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 text-center text-lg font-semibold text-primary-base"
      >
        Innovating Across Industries
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
