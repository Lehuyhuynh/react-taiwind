import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className="wrapper mt-6  ">
        <div className="container px-3.5 mx-auto w-3/5 ">
          <div className="row -scroll-mx-4 ">
            <div className="col-lg-3 col-md-4">
              <div className="profile bg-white rounded-md w-full inline-block shadow-black w-2/6">
                <div className="name ">
                  <h3>HENRY ROONEY</h3>
                  <span>Creative Designer</span>
                  <img
                    src="https://html.tavonline.co/mat/default/images/profile.jpg"
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
                      {" "}
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
                        </ul>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <>
        <nav>
          <ul>
            
          </ul>
        </nav>

        <Outlet />
      </>
    </div>
  );
};

export default Home;
