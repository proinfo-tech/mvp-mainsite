import HomePage from "@/pages/Homepage";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy load pages
const HowItWorksPage = lazy(() => import("@/pages/HowItWorksPage"));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
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
]);

export default router;