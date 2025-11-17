import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/layout/SEO";
import logo from "@/assets/svg/Logo.svg";

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Oops! The page you're looking for seems to be missing from our blueprints. Let's get you back on track!"
        keywords={["404", "not found", "error", "Abdamin"]}
        ogUrl="https://www.abdamin.com/404"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Abdamin Logo"
            className="mx-auto mb-8 h-8 lg:h-10"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />

          {/* 404 Number */}
          <motion.div
            className="mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-12 bg-secondary-base" />
            <h1 className="text-6xl font-bold text-primary-base md:text-8xl">
              404
            </h1>
            <div className="h-px w-12 bg-secondary-base" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mb-4 text-3xl font-bold text-neutral-base md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mb-8 text-base leading-relaxed text-neutral-50 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </motion.p>

          {/* Quick Links */}
          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/services"
              className="rounded-xl border border-primary-30 bg-white px-4 py-2 text-sm font-semibold text-primary-base transition-all duration-300 hover:border-secondary-base hover:bg-primary-10/30"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio"
              className="rounded-xl border border-primary-30 bg-white px-4 py-2 text-sm font-semibold text-primary-base transition-all duration-300 hover:border-secondary-base hover:bg-primary-10/30"
            >
              Our Projects
            </Link>
            <Link
              to="/about-us"
              className="rounded-xl border border-primary-30 bg-white px-4 py-2 text-sm font-semibold text-primary-base transition-all duration-300 hover:border-secondary-base hover:bg-primary-10/30"
            >
              About Us
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-full bg-primary-base px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-60"
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              to="/get-in-touch"
              className="group flex items-center gap-2 rounded-full border-2 border-primary-base px-6 py-3 text-base font-semibold text-primary-base transition-all duration-300 hover:bg-primary-base hover:text-white"
            >
              <span>Get in Touch</span>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
