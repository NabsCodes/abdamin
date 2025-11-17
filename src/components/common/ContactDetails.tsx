import React from "react";
import { CallCalling, Send2, Gps } from "iconsax-react";
import { ExternalLink, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { Link } from "react-router-dom";

// Interface for ContactDetails component props
interface ContactDetailsProps {
  className?: string;
}

// ContactDetails component
const ContactDetails: React.FC<ContactDetailsProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full flex-col gap-8 md:max-w-lg",
        className,
      )}
    >
      <ContactItem
        title="Call Us"
        description="Call our team Mon-Fri from 8am to 5pm."
        icon={<CallCalling size="28" color="#0A0A0A" />}
        linkText="+2349123278100"
        linkHref="tel:+2349123278100"
      />
      <ContactItem
        title="Say Hello"
        description="We're always happy to hear from you."
        icon={<Send2 size="28" color="#0A0A0A" />}
        linkText="Shoot us an email"
        linkHref="mailto:abdaminltd@gmail.com"
      />
      <ContactItem
        title="Visit Us"
        description="Chat to us in person at our Adamawa HQ."
        icon={<Gps size="28" color="#0A0A0A" />}
        linkText="36, Bank Road, Bekaji, PMB 2106, Jimeta"
        linkHref="https://www.google.com/maps/search/?api=1&query=36+Bank+Road,+Bekaji,+PMB+2106,+Jimeta"
        external
      />
    </div>
  );
};

// Interface for ContactItem component props
interface ContactItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
  external?: boolean;
}

// ContactItem component
const ContactItem: React.FC<ContactItemProps> = ({
  title,
  description,
  icon,
  linkText,
  linkHref,
  external,
}) => {
  return (
    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-primary-30 bg-white p-4 transition-all duration-300 hover:border-secondary-base md:p-6">
      {/* Top Accent Line - Contained within rounded corners */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary-base transition-all duration-500 group-hover:w-full" />

      <div className="flex flex-col gap-3">
        {/* Title with Icon */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 rounded-lg bg-primary-10 p-2 transition-all duration-300 group-hover:bg-secondary-base/10">
            {icon}
          </div>
          <p className="text-xl font-bold leading-6 text-neutral-base transition-colors duration-300 group-hover:text-primary-base md:text-2xl">
            {title}
          </p>
        </div>
        <p className="text-sm font-medium leading-relaxed text-neutral-50 md:text-base">
          {description}
        </p>
      </div>

      {/* Link */}
      <div className="flex items-center gap-2 border-t border-neutral-20 pt-4">
        {external ? (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-semibold text-primary-base transition-all duration-300 hover:gap-3 hover:text-secondary-base"
          >
            <span>{linkText}</span>
            <ExternalLink
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ) : (
          <Link
            to={linkHref}
            className="flex items-center gap-2 text-base font-semibold text-primary-base transition-all duration-300 hover:gap-3 hover:text-secondary-base"
          >
            <span>{linkText}</span>
            <ChevronRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
