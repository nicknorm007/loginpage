import React from 'react';

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      <div className="top-bar-right">
        Links to Login and Signup
      </div>

    </div>

    {children}

  </div>
);

export default Base;
