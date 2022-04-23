import React, { useState, useCallback } from 'react';
import { ResultComponent } from '../result';
import { requestSearch } from '../../util/helper';
import './search.style.css';
import Search from './search';

export default function SearchComponent() {
  const [results, setResults] = useState(null);

  const onSubmit = useCallback(async (name) => {
    const result = await requestSearch(name.toLowerCase());
    setResults({ ...result, isLoading: false });
  }, []);

  const cleanUp = () => setResults(null);

  return (
    <>
      <Search onSubmit={onSubmit} cleanUp={cleanUp} />
      <ResultComponent results={results} />
    </>
  );
}
