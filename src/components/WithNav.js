// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import NavBar from './Sidebar/Sidebar';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};