import React from 'react';

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className='wrapper mt-60px'>
          <span>hdasjdja</span>
      </div>

      <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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