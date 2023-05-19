import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="" />
    <div>

    </div>
    <div>
      <Outlet />
      </div>
  )
   
};

export default Layout;