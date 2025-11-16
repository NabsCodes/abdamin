import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import UpcomingProject from "./UpcomingProject";
import ScrollBar from "@/components/ui/ScrollBar";
import SkipToContent from "@/components/common/SkipToContent";
import { useFocusManagement } from "@/hooks/useFocusManagement";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const shouldShowProject = location.pathname !== "/get-in-touch"; // Hide project section on get in touch page

  // Manage focus on route changes for accessibility
  useFocusManagement();

  return (
    <>
      <SkipToContent />
      <ScrollBar position="top" />
      <Header />
      <Navbar />
      <main
        id="main-content"
        className="min-h-[calc(100vh-52px)]"
        tabIndex={-1}
        aria-label="Main content"
      >
        {children}
      </main>
      {shouldShowProject && <UpcomingProject />}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
