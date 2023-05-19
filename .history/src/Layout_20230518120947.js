import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <img src="img/" alt="" />
    <div className="wrapper my-14 mx-auto">

      <div className="container px-3.5 mx-auto w-3/5">

        <div className="row flex">

          <div className="w-1/4">

            <div className="profile  bg-gray-100  h-max ">

              <div className="name ">

                <h3 className="mx-5 mr-4">HENRY ROONEY</h3>
                <span className="mx-5 mb-4">Creative Designer</span>
                <figure>
                  <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="#" />
                </figure>

                <ul className="m-5">
                  <li className="m-5"></li>
                  <li className="m-5">
                    Name: <span> Chris Johnson</span>
                  </li>
                  <li className="m-5">
                    Birthday: <span>06 December 1987</span>
                  </li>
                  <li className="m-5">
                    Job : <span> Freelancer</span>
                  </li>
                  <li className="m-5">
                    Email: <span>henry@domain.com</span>
                  </li>
                  <li className="m-5">
                    Skype: <span>henryrooney85</span>
                  </li>
                  </ul>

                  <div className="col-md-12">
                    <button className=" my-4 m-auto mx-7 "> 
                      Download Cv
                      <i  class="fa-solid fa-download " ></i>
                    </button>
                  </div>

                </div>

              </div>

            </div>






 


            <div className="ajax-tab-container  w-3/4  ml-5">

              <div className="row">

                <header className="bg-gray-100 h-16 rounded-lg">
                  <nav className="flex">
                    <ul className="flex mr-36 ">
                      <li>
                        <Link to="/home">
                        <i  class="fa-solid fa-house" style={{margin:"24px 20px 23px 25px"}}></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/resume" className="m-5">Resums</Link>
                      </li>
                      <li>
                        <Link to="/portfolo" className="m-5">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="m-5">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      
                    </ul>

                    <div className="hidden-md social-icons pull-right flex ">
                       <a  className="fb mr-3" href="fb ">
                       <i class="fa-brands fa-facebook"></i>
                       </a>

                       <a className="fb mr-3" href="tw">
                       <i class="fa-brands fa-twitter"></i>
                       </a>

                       <a className="fb mr-3" href="ins">
                       <i class="fa-brands fa-instagram"></i>
                       </a>

                       <a href="dr">
                       <i class="fa-brands fa-dribbble"></i>
                       </a>

                       <div>
                       <a href="mailto:hi@tavonline.net" 
                      className="pull-right site-btn icon hidden-xs">Hire Me 
                      <i class="fa fa-paper-plane" aria-hidden="true"></i></a>
                    </div> 
                       
                    </div>


                    
                  </nav>
                </header>

                <div className=" mt-6 bg-gray-100 rounded-lg m-w-auto"><br />
                  <Outlet />
                </div>

                <footer>
                  <div className="footer flex">
                    <div className="name">Henry Rooey</div>
                    <div className="copyright">© 2017 All rights reserved. Designed by 
                        <a href="https://themeforest.net/user/tavonline">  tavonline </a>
                    </div>
                  </div>
                </footer>

              </div>

            </div>

          </div>

        </div>

      </div>



















      
    
    
      
    </div>
  )
   
};

export default Layout;