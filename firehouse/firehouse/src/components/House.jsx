import React from 'react';

const House = ({ currentHouse }) => {
  return !currentHouse ? (
    <h2>Section a book a get stated</h2>
  ) : (
    <div>
      <h3>Details for</h3>
      <p>Title: {currentHouse.FacilityAddress}</p>
      <p>Pages: {currentHouse.Borough} </p>
    </div>
  );
};

export default House;