import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout"; // <-- IMPORT THE NEW LAYOUT

const HomePage = lazy(() => import("@/pages/Homepage"));
const HowItWorksPage = lazy(() => import("@/pages/HowItWorksPage"));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div></div>}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: '/how-it-works',
        element: (
          <Suspense fallback={<div></div>}>
            <HowItWorksPage />
          </Suspense>
        )
      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<div></div>}>
            <AboutUsPage />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;