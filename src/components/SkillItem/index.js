import React from 'react';
import './style.css';
export default ({ name, percent }) => {
  return (
    <div id='container'>
      <div id='name'>
        <span>{name.toUpperCase()}</span>
        <span>{`${percent}%`}</span>
      </div>
      <div id='status'>
        <div id='percentContainer'>
          <div id='percent' style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};
