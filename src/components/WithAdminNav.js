// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import NavBar from './Sidebar/AdminSidebar';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};