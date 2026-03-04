import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Watches for route changes and scrolls to the hash target.
 * Handles both same-page and cross-page hash navigation.
 * Place once inside <BrowserRouter>.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay lets the DOM settle after route change
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // No hash → scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
