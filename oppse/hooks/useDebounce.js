import { useState, useEffect } from 'react';

/**
 * Custom hook to delay the propagation of a changing value.
 * Useful for search inputs to avoid rapid API calls.
 *
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds (defaults to 500)
 * @returns {*} debouncedValue
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Ensure delay is a non-negative number
  const ms = Math.max(0, Number(delay) || 0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => clearTimeout(handler);
  }, [value, ms]);

  return debouncedValue;
};