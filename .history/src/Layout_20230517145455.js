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
                  <ul>
                  <li></li>
                    <li>
                      Name: <span> Chris Johnson</span>
                    </li>
                    <li>
                      Birthday: <span>06 December 1987</span>
                    </li>
                    <li>
                      Job : <span> Freelancer</span>
                    </li>
                    <li>
                      Email: <span>henry@domain.com</span>
                    </li>
                    <li>
                      Skype: <span>henryrooney85</span>
                    </li>
                  </ul>
                  <div className="col-md-12">
                      <button className=" my-4 m-auto mx-7 block">
                      
                      Download Cv
                       <i  class="fa-solid fa-download " ></i>
                    </button>
                  </div>
                    </div>
                  </div>

                  <div className="ajax-tab-container  w-3/4  ml-5">
                    <div className="row">
                    <header>
                  <nav>
                    <div className="row flex bg-slate-50">
                      <div className="col-md-8 col-sm-8 col-xs-4">
                        <ul className="flex">
                        <li>
                          <Link to="/home"><i class="fa-solid fa-house"></i></Link>
                        </li>
                         <li>
                          <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                          <Link to="/portfolo">Home</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-8 dynamic">
                        <button className=" my-5 mx-5 my-0 mr-1.5 bg-amber-500 rounded-xl border-inherit border-4">Hire Me
                        <i class="fa fa-paper-plane mx-2:hover bg" aria-hidden="true" ></i>
                        </button>
                      </div>
                    </div>
                  </nav>
                </header>
                    </div>
                  </div>


                </div>
                <Outlet></Outlet>
              </div>
              
            </div>
            
       </div>
       
    </div>
  
    
  )
};

export default Layout;