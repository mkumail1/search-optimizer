import React, { useState, useCallback } from 'react';
import { ResultComponent } from '../result';
import { requestSearch } from '../../util/helper';
import './search.style.css';
import Search from './search';

export default function SearchComponent() {
  const [results, setResults] = useState(null); //this stores all the artists results from the api

  //this is called when the api fetch function is triggered
  const onSubmit = useCallback(async (name) => {
    setResults({ isLoading: true });
    const result = await requestSearch(name.toLowerCase());
    setResults({ ...result, isLoading: false });
  }, []);

  //this sets the results back to empty if the input search bar has ''
  const cleanUp = () => setResults(null);

  return (
    <>
      <Search onSubmit={onSubmit} cleanUp={cleanUp} />
      <ResultComponent results={results} />
    </>
  );
}
