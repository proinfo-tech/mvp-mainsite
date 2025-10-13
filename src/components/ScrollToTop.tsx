import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component automatically scrolls the window to the top whenever the
 * route changes. It uses the `useLocation` hook to detect a change in the URL's pathname.
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: Use "auto" to skip smooth scrolling
    });
  }, [pathname]); 

  return null;
};

export default ScrollToTop;