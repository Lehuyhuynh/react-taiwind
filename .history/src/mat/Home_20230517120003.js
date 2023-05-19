import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className="wrapper my-14 mx-auto ">
        <div className="container px-3.5 mx-auto w-3/5 ">
          <div className="row  ">
            <div className="col-lg-3 col-md-4 flex">
              <div className="profile w-1/4 bg-gray-300">
                <div className="name ">
                  <h3>HENRY ROONEY</h3>
                  <span>Creative Designer</span>
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

              <div className="ajax-tab-container w-3/4 bg-gray-300 ml-4 ">
              <div className="row">
                <header>
                  <nav>
                    <div className="row flex">
                      <div className="col-md-8 col-sm-8 col-xs-4">
                        <ul className="flex">
                        <li>
                          <Link to="/">Home</Link>
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
               

                <footer>
                  <div className="footer col-md-12 top_30 bottom_30">
                    <div className="name col-md-4 hidden-md hidden-sm hidden-xs">Henry Rooney.</div>
                    <div className="copyright col-lg-8 col-md-12">© 2017 All rights reserved. Designed by 
                    <a href="https://themeforest.net/user/tavonline" className="text-cyan-500">tavonline</a>
                    </div>
                  </div>
                </footer>
              </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

    
       

        <Outlet />
      
    </div>
  );
};

export default Home;
