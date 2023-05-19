import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="" />
      <nav>
        <ul className="flex">
          <li>
            <Link to="/home">
            <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to="/resums">Resums</Link>
          </li>
          <li>
            <Link to="/portfolio">Blogs</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
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
    <div><br />
    <Outlet />
    </div>
      
      </div>
  )
   
};

export default Layout;