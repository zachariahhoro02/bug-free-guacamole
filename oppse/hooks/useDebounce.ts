import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useDebounce - returns a debounced value and a cancel function.
 *
 * @template T
 * @param {T} value - value to debounce
 * @param {number} [delay=500] - delay in milliseconds
 * @returns {[T, () => void]} tuple of debounced value and cancel()
 */
export function useDebounce<T>(value: T, delay = 500): [T, () => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ms = Math.max(0, Number(delay) || 0);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    cancel();

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
      timeoutRef.current = null;
    }, ms);

    return () => cancel();
  }, [value, ms, cancel]);

  // ensure cleanup on unmount
  useEffect(() => () => cancel(), [cancel]);

  return [debouncedValue, cancel];
}
