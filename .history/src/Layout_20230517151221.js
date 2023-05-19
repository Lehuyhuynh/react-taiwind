import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="" />
      <nav>
        <ul className="flex">
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
    <div>

    </div>
    <div ></div>
      
      </div>
  )
   
};

export default Layout;