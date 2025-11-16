import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { MenuProvider } from "@/context/MenuContext";

// Lazy load all pages for code splitting
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Portfolio = lazy(() => import("@/pages/Project/Portfolio"));
const ServicesPage = lazy(() => import("@/pages/Services/ServicesPage"));
const GetInTouch = lazy(() => import("@/pages/GetInTouch"));
const Construction = lazy(() => import("@/pages/Services/Construction"));
const Transportation = lazy(() => import("@/pages/Services/Transportation"));
const Telecoms = lazy(() => import("@/pages/Services/Telecoms"));
const Consults = lazy(() => import("@/pages/Services/Consults"));
const SolarGeneration = lazy(() => import("@/pages/Services/SolarGeneration"));
const GauniWater = lazy(() => import("@/pages/Services/GauniWater"));
const ProjectPage = lazy(() => import("@/pages/Project/ProjectPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

type routes = {
  path: string;
  element: React.ReactNode;
  layout?: boolean;
};

const routes: routes[] = [
  { path: "/", element: <HomePage />, layout: true },
  { path: "/about-us", element: <AboutUs />, layout: true },
  { path: "/portfolio", element: <Portfolio />, layout: true },
  { path: "/services", element: <ServicesPage />, layout: true },
  { path: "/services/construction", element: <Construction />, layout: true },
  {
    path: "/services/transportation",
    element: <Transportation />,
    layout: true,
  },
  { path: "/services/telecoms", element: <Telecoms />, layout: true },
  { path: "/services/consults", element: <Consults />, layout: true },
  {
    path: "/services/solar-generation",
    element: <SolarGeneration />,
    layout: true,
  },
  { path: "/services/gauni-water", element: <GauniWater />, layout: true },
  { path: "/get-in-touch", element: <GetInTouch />, layout: true },
  { path: "/portfolio/:projectId", element: <ProjectPage />, layout: true },
  { path: "*", element: <NotFound />, layout: false },
];

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-base border-t-transparent" />
  </div>
);

const Router = () => {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.layout ? (
                    <Layout>
                      <Suspense fallback={<PageLoader />}>
                        {route.element}
                      </Suspense>
                    </Layout>
                  ) : (
                    <Suspense fallback={<PageLoader />}>
                      {route.element}
                    </Suspense>
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MenuProvider>
  );
};

export default Router;
