import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className='wrapper mt-6  ' >
          <div className="container px-15 mx-auto"></div>
      </div>
 
      <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>

    </div>
  );
};

export default Home;