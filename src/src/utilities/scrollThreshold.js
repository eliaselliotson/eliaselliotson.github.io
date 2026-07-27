import { useState, useEffect } from 'react';

export function useScrollThreshold(threshold = 100) {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
      if (currentScroll > threshold && !isPassed) {
        setIsPassed(true);
      } else if (currentScroll <= threshold && isPassed) {
        setIsPassed(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, isPassed]);

  return isPassed;
}
