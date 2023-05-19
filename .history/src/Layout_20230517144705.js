import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
       <img src="img/" alt="" />
       <div className="wrapper my-14 mx-auto">
            <div className="container px-3.5 mx-auto w-3/5">
              <div className="row">
                <div className="col-lg-3 col-md-4 flex">
                  <div className="profile w-1/4 bg-gray-300 h-max">
                    <div className="name"></div>
                  </div>
                </div>
              </div>
            </div>
       </div>
    </div>
    
  )
};

export default Layout;