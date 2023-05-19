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
                    <div className="name">
                    <h3 style={{padding:"10px 0 0 15px"}}>HENRY ROONEY</h3>
                    <span style={{padding:"10px 0 0 15px"}}>Creative Designer</span>
                  <img
                    src="https://html.tavonline.co/mat/default/images/profile.jpg" className="r"
                    alt=""
                  />
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
       </div>
    </div>
    
  )
};

export default Layout;