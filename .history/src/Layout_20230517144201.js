import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
       <img src="img/" alt="" />
       <div className="wrapper my-14 mx-auto"></div>
    </div>
    <Outlet />
  )
};

export default Layout;