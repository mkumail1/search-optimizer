import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { requestEvents, requestSearch, renderDate } from '../../util/helper';
import { ResultCard } from '../result';
import LoadingScreen from '../common/loadingScreen';

import './events.style.css';

export default function EventComponent() {
  const { artistName } = useParams(); //artist name is fetch from parms of the browser
  const [events, setEvents] = useState(null); //this stores all the events fetched from the api
  const [isLoading, setIsLoading] = useState(true); //this keeps track of loading state
  const [results, setResults] = useState(null); //this stores the default information of the artist

  const onSubmit = useCallback(async () => {
    if (!results) {
      const res = await requestSearch(artistName.toLowerCase());
      setResults(res);
    }

    const response = await requestEvents(artistName.toLowerCase());
    setEvents(response);
    setIsLoading(false);
  }, [artistName, results]);

  useEffect(() => {
    if (artistName) {
      setIsLoading(true);
      onSubmit();
    }

    //updates the cache state of name on browser refresh
    window.localStorage.setItem('name', artistName);
  }, [artistName]);

  return (
    <div>
      <h4 className="back-page">
        <Link to="/">
          &#60; <span className="margin-5"> Back to results</span>
        </Link>
      </h4>

      {results && (
        <div className="result-card-provider">
          <ResultCard data={results} />
        </div>
      )}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="upcoming-events-container">
          {events.length === 0 ? (
            <h2>No upcoming events...</h2>
          ) : (
            <div>
              <h2 className="back-page">{events.length} upcoming events</h2>
              <div className="event-cards">
                {events.map((e) => (
                  <div className="event-card" key={e.id}>
                    <h5>EVENT DETAILS</h5>
                    <div className="event-card-detail">
                      <div className="event-card-bar">
                        <h6>Country</h6>
                        <p>{e.venue.country}</p>
                      </div>
                      <div className="event-card-bar">
                        <h6>City</h6>
                        <p>{e.venue.city}</p>
                      </div>
                      <div className="event-card-bar">
                        <h6>Venue</h6>
                        <p>{e.venue.name}</p>
                      </div>
                      <div className="event-card-bar">
                        <h6>Date</h6>
                        <p>{renderDate(e.datetime)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
