import React from 'react';
import './card.style.css';
import { ResultCard } from '.';
import LoadingScreen from '../common/loadingScreen';

export default function ResultComponent({ results, name }) {
  if (results?.isLoading) return <LoadingScreen />;

  return (
    <div className="result-section">
      {results === null ? (
        <h4 className="helper-heading">Let's start searching...</h4>
      ) : results?.error ? (
        <h4 className="helper-heading">
          Sorry result {results?.error?.toLowerCase()} for "{name}" :(
        </h4>
      ) : (
        <div data-testid="result-card">
          <h4 className="helper-heading">Result found for "{results.name}"</h4>
          <div className="result-card-provider">
            <ResultCard data={results} />
          </div>
        </div>
      )}
    </div>
  );
}
