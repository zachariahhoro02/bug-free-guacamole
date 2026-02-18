import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

/**
 * Small example component demonstrating `useDebounce`.
 */
export default function SearchExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching API for:', debouncedSearchTerm);
      // Place fetch logic here
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search for anything..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
