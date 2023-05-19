import React from 'react';
import { Outlet, Link } from "react-router-dom";

const App2 = () => {
  return (
    <div>
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

export default App2;