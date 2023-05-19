import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className='wrapper mt-6  ' >
          <div className="container px-3.5 mx-auto w-3/5 ">
            <div className="row -scroll-mx-4 ">
              <div className="col-lg-3 col-md-4">
                <div className="profile bg-white rounded-md w-full inline-block shadow-black ">
                  <div className="name"></div>
                </div>
              </div>
            </div>
          </div>
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