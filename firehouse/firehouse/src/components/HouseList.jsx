
import React from 'react';

const HouseList = ({ fireData, handleSelect }) => {
  const renderData = fireData.map((item, index) => {
    return (
      <li
        onClick={() => handleSelect(item)}
        style={{ cursor: 'pointer' }}
        key={index}
      >
        {item.FacilityName}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>{renderData}</ul>
    </div>
  );
};

export default HouseList;