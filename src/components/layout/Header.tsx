import { NavLink } from "react-router-dom";
import { navInfo } from "@/utils/data";
import { Building4, Call, Sms, Award } from "iconsax-react";

const Header = () => {
  return (
    <header className="mx-auto hidden h-[52px] max-w-8xl items-center justify-between bg-white px-4 py-[16px] font-medium text-primary-base sm:px-6 md:flex lg:px-8">
      <div className="flex items-center justify-center gap-[24px] text-sm">
        <div className="flex items-center justify-center gap-2">
          <Sms size="16" variant="Bold" />
          <NavLink to={`mailto:${navInfo.email}`} className="hover:underline">
            {navInfo.email}
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Call size="16" variant="Bold" />
          <NavLink to={`tel:${navInfo.phone}`} className="hover:underline">
            {navInfo.phone}
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Building4 size="16" variant="Bold" />
          <p>{navInfo.address}</p>
        </div>
      </div>
      {/* Company Value Statement - Replaced social media links */}
      <div className="flex items-center gap-2 text-sm">
        <Award size="16" variant="Bold" className="text-secondary-base" />
        <p className="font-semibold text-primary-base">Excellence Since 2000</p>
      </div>
    </header>
  );
};

export default Header;
