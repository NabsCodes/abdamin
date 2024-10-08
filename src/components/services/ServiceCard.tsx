import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group relative block overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-base focus:ring-offset-2"
      aria-label={`${title}: ${description}. Learn more about this service.`}
    >
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
        <div className="relative flex h-[350px] flex-col justify-end p-6 md:h-[404px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
          <h2 className="relative mb-2 text-xl font-bold text-white">
            {title}
          </h2>
          <p className="relative mb-4 text-white">{description}</p>
          <div className="relative flex items-center text-white">
            <span className="mr-2 transition-all duration-300 group-hover:text-secondary-base group-focus:text-secondary-base">
              Learn more
            </span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[32px] w-[32px] transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1"
              aria-hidden="true"
            >
              <g clipPath="url(#clip0_252_400)">
                <path
                  d="M27.8637 7.19696C28.1566 6.90406 28.1566 6.42919 27.8637 6.1363C27.5708 5.8434 27.0959 5.8434 26.803 6.1363L27.8637 7.19696ZM8.13635 24.803L7.60602 25.3333L8.66668 26.394L9.19701 25.8636L8.13635 24.803ZM26.803 6.1363L8.13635 24.803L9.19701 25.8636L27.8637 7.19696L26.803 6.1363Z"
                  fill="#D02A10"
                />
                <path
                  d="M13.64 6.66663L27.3333 6.66663L27.3333 20.36"
                  stroke="#D02A10"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_252_400">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
