import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls to top of page on route change
 * This fixes the issue where navigating from page A to page B
 * maintains the scroll position from page A
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      
      // Also reset scroll position for smooth scroll libraries (like Lenis)
      // Check if Lenis instance exists and scroll to top
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

