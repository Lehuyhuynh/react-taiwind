import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
       <img src="img/" alt="" />
    </div>
      <Outlet />
  )
};

export default Layout;