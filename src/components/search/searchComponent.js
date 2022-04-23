import React, { useState, useEffect, useCallback } from 'react';
import { ResultComponent } from '../result';
import { requestSearch } from '../../util/helper';

import searchIcon from '../../assets/icons/search.png';
import './search.style.css';

export default function SearchComponent() {
  const [name, setName] = useState(window.localStorage.getItem('name') || '');
  const [delayedSearchName, setDelayedSearchName] = useState(name);
  const [results, setResults] = useState(null);

  const onSubmit = useCallback(async () => {
    const result = await requestSearch(name.toLowerCase());
    setResults({ ...result, isLoading: false });
  }, [name]);

  const onSearch = (e) => {
    setDelayedSearchName(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(delayedSearchName);
      window.localStorage.setItem('name', delayedSearchName);
    }, 300);

    return () => clearTimeout(timer);
  }, [delayedSearchName]);

  useEffect(() => {
    if (name !== '') {
      onSubmit();
      setResults({ ...results, isLoading: true });
    } else setResults(null);
  }, [name]);

  return (
    <>
      <div className="search-main">
        <input
          data-testid="search"
          className="search-bar"
          type="text"
          value={delayedSearchName}
          placeholder="Search artist"
          onChange={onSearch}
        />
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>

      <ResultComponent results={results} name={name} />
    </>
  );
}
