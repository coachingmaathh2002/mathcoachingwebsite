import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a small delay for DOM to complete layout and rendering
        const timer = setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 120,
            behavior: 'smooth'
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
