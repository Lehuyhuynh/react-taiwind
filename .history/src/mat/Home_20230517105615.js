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
                        <i class="fa fa-paper-plane mx-2:hover bg" aria-hidden="true" ></i>
                        </button>
                      </div>
                    </div>
                  </nav>
                </header>
                <div id="home">
                  <div className="row">
                    <section className="services line graybg col-md-12 padding_50 padbot_50">
                      <div className="section-title bottom_45"> <h2>About Me</h2> </div>
                      <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. <br />
                      <br /> Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue
                      </p>appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
                    </section>
                  </div>

                  <div className="row">
                    <section className="services line graybg col-md-12 padding_50 padbot_50">
                      <div className="section-title bottom_45"> <h2>My Services</h2></div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="service">
                            <div className="icon">
                            <i class="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <span className="title">Web Development</span>
                            <p className="little-text">I have been working on web design for 10 years.</p>
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="service">
                            <div className="icon">
                            <i class="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <span className="title">Web Development</span>
                            <p className="little-text">I have been working on web design for 10 years.</p>
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="service">
                            <div className="icon">
                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                            </div>
                            <span className="title">Branding Identity</span>
                            <p className="little-text">We will make you a brand that is catchy and leaves a trace.</p>
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="service">
                            <div className="icon">
                            <i class="fa-solid fa-code-branch"></i>
                            </div>
                            <span className="title">Illustrator</span>
                            <p className="little-text">I have been working on illustration design for 6 years.</p>
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="service">
                            <div className="icon">
                            <i class="fa-regular fa-calendar-days"></i>
                            </div>
                            <span className="title">Fast Delivery</span>
                            <p className="little-text">I deliver your business as fast as possible.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="row">
                    <section className="desgin-skills col-md-6 padding_60 padbot_50">
                      <div className="section-title bottom_45">
                        <ul className="skill-list">
                          <li>
                            <h3>Photoshop</h3>
                            <div className="percentage" style={{width:"100%", background:"#fff"}}></div>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
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
