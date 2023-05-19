import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="" />
    

    </div>
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
      </div>
    <div>
  )
   
};

export default Layout;