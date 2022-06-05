import React from 'react';
import './Navbar.scss';
const Navbar = ({ clickHandler }) => {
  return (
    <div>
      <ul className="rnavbar">
        <li className="rnavbar-item" onClick={() => clickHandler(1)}>
          Home
        </li>
        <li className="rnavbar-item" onClick={() => clickHandler(2)}>
          Business
        </li>
        <li className="rnavbar-item" onClick={() => clickHandler(3)}>
          Services
        </li>
        <li className="rnavbar-item" onClick={() => clickHandler(4)}>
          About
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
