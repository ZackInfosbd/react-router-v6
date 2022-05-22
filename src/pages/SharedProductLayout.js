import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProductLayout = () => {
  return (
    <React.Fragment>
      <h2>products</h2>
      <Outlet />
    </React.Fragment>
  );
};

export default SharedProductLayout;
