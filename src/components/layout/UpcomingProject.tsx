/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import upcoming from "../../assets/images/upcoming.webp";
import AnimatedSection from "./AnimatedSection";

const UpcomingProject = () => {
  return (
    <AnimatedSection>
      <div className="relative mx-auto max-w-8xl px-4 py-[80px] sm:px-6 md:py-[100px] lg:px-8">
        <div
          className="flex w-full rounded-xl bg-neutral-base bg-cover bg-center px-4 py-[48px] md:px-[64px] md:py-[72px]"
          style={{ backgroundImage: `url(${upcoming})` }}
        >
          <div className="mx-auto flex max-w-[760px] flex-col items-center justify-center gap-6 rounded-xl">
            <p className="text-center text-base font-bold text-[#8094b2] sm:text-lg">
              REACH OUT
            </p>
            <h2 className="text-center text-3xl font-bold leading-tight text-white md:text-[52px]">
              Have an Upcoming Project?
            </h2>
            <p className="text-center text-sm font-medium text-neutral-10 sm:text-lg">
              Explore how Abdamin can turn your vision into reality with our
              expertise and dedication to excellence. Let's build the future
              together!
            </p>
            <NavLink className="btn btn-primary" to="/get-in-touch">
              Get in touch
            </NavLink>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default UpcomingProject;
