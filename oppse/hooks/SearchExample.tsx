import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export default function SearchExample(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching API for:', debouncedSearchTerm);
      // fetch logic goes here
    }
  }, [debouncedSearchTerm]);
  return React.createElement('input', {
    type: 'text',
    placeholder: 'Search for anything...',
    value: searchTerm,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value),
  });
}
