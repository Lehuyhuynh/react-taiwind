import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <h2>djajsj</h2>
          <h3>askfkskf</h3>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;