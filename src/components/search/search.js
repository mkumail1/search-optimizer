import React, { useEffect, useState } from 'react';
import './search.style.css';
import searchIcon from '../../assets/icons/search.png';

export default function Search({ onSubmit, cleanUp }) {
  const [name, setName] = useState(window.localStorage.getItem('name') || '');
  const [delayedSearchName, setDelayedSearchName] = useState(name);

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
    if (name !== '') onSubmit(name);
    else cleanUp();
  }, [name]);

  return (
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
  );
}
