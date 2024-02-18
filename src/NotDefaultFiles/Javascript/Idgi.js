import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <NavLink to="/" exact='true' activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/SelectMeal" activeclassname="active">
            Select Meal
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeclassname="active">
            Menu
          </NavLink>
        </li>
      </ul>
      </nav>
      <hr />
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;