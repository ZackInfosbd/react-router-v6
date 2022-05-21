import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </React.Fragment>
  );
};
export default Home;

/**
 * if you want to navigate your project internally ,you would use LINK component, to='/about'
 * if you want to navigate externally you d rather use <a href="www.google.com">Google</a>
 */
