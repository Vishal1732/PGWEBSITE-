import React, { useState } from 'react';
import GoogleMapApi from './GoogleMapApi';
import Navbar from './Navbar';

const AboutNavbar = () => {
  const [moreShow, setMoreShow] = useState(false);

  const handleShowMore = () => {
    setMoreShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, I'm Upendra!</h1>
          <p>
            If you’re looking for a cheap place to live in a new city, paying guest accommodations, or PGs for short, have become invaluable. However, what is a PG exactly? Paying guests, or PGs for short, are people who hire out rooms in private residences..
          </p>
          {moreShow && (
            <p>
              If you're looking for a cheap place to live in a new city, paying guest accommodations, or PGs for short, have become invaluable. However, what is a PG exactly? Paying guests, or PGs for short, are people who hire out rooms in private residences..
            </p>
          )}

          <button className="btn btn-primary btn-lg" role="button" onClick={handleShowMore}>
            Learn more »
          </button>
        </div>
      </div>
      <GoogleMapApi />
    </>
  );
};

export default AboutNavbar;
