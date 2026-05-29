import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change with a smooth transition
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
