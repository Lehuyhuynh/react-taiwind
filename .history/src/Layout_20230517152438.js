import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <img src="img/" alt="" />
    <div className="wrapper my-14 mx-auto">
      <div className="container px-3.5 mx-auto w-3/5">
        <div className="row">
           .col-lg-3
           
        </div>
      </div>
    </div>


















      <div className="flex">
    

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
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  <div>

  </div>
    </div>
    
    <div><br />
    <Outlet />
    </div>
      
      </div>
  )
   
};

export default Layout;