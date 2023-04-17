/**
 * In case we run into the Gatsby React hydration issue
 * https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */
import { useState, useEffect } from 'react';

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
