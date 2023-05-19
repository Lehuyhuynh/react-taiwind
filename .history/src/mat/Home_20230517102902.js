import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className="wrapper my-14 mx-auto flex ">
        <div className="container px-3.5 mx-auto w-3/5 flex">
          <div className="row w-1/4 ">
            <div className="col-lg-3 col-md-4">
              <div className="profile bg-white rounded-md w-full inline-block shadow-black ">
                <div className="name ">
                  <h3>HENRY ROONEY</h3>
                  <span>Creative Designer</span>
                  <img
                    src="https://html.tavonline.co/mat/default/images/profile.jpg" className="w-full"
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

              <div className="ajax-tab-container ">
              <div className="row">
                <header>
                  <nav>
                    <div className="row">
                      <div className="col-md-8 col-sm-8 col-xs-4">
                        <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                         <li>
                          <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
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
                        <i class="fa fa-paper-plane mx-2:" aria-hidden="true" ></i>
                        </button>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
              </div>

            </div>18px 18px 0 5px
          </div>
        </div>
      </div>

    
       

        <Outlet />
      
    </div>
  );
};

export default Home;
