import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <img src="img/" alt="" />
      <div className="wrapper my-14 mx-auto">
        <div className="container px-3.5 mx-auto w-3/5">
          <div className="row flex">
            <div className="w-1/4">
              <div className="profile  bg-gray-100  h-max  pt-5 pb-7 rounded-lg">
                <div className="name ">
                  <h3 className="mx-5 mr-4 ">HENRY ROONEY</h3>
                  <span className="mx-5 mb-4 mb-2">Creative Designer</span>
                  <figure className="mt-2">
                    <img
                      src="https://html.tavonline.co/mat/default/images/profile.jpg"
                      alt="#" />
                  </figure>

                  <ul className="m-5 ">
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

                  <div className="t text-center">
                    <button className=" my-4 m-auto mx-7 border-solid border-2 border-indigo-600 rounded-lg bg-yellow-500 hover:bg-amber-800 ">
                      <h3></h3>
                      <div className="rounded-full  ">
                      <i class="fa-solid fa-download "></i>
                      </div>
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ajax-tab-container  w-3/4  ml-5">
              <div className="row">
                <header className="bg-gray-100 h-16 rounded-lg">
                  <nav className="flex">
                    <ul className="flex ">
                      <li className="bg-orange-300 h-16 hover:bg-orange-400">
                        <Link to="/home">
                          <i
                            class="fa-solid fa-house"
                            style={{ margin: "24px 20px 23px 25px" }}
                          ></i>
                        </Link>
                      </li>

                      <li className="m-5 hover:text-amber-500">
                        <Link to="/resume">Resums</Link>
                      </li>
                      <li className="m-5 hover:text-amber-500">
                        <Link to="/portfolo">Portfolio</Link>
                      </li>
                      <li className="m-5 hover:text-amber-500">
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className=" m-5 hover:text-amber-500">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>

                    <div className="hidden-md social-icons pull-right flex ml-28 ">
                      <a
                        className="fb mr-1 m-5  hover:text-indigo-600"
                        href="fb "
                      >
                        <i class="fa-brands fa-facebook"></i>
                      </a>

                      <a
                        className="fb mr-1 m-5  hover:text-indigo-300"
                        href="tw"
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </a>

                      <a
                        className="fb mr-1 m-5  hover:text-red-500"
                        href="ins"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>

                      <a
                        className="fb mr-1 m-5   hover:text-amber-200"
                        href="dr"
                      >
                        <i class="fa-brands fa-dribbble"></i>
                      </a>

                      <div className="m-5 border-solid border-2 border-indigo-600 rounded bg-yellow-500 hover:bg-amber-800 -">
                        <a
                          href="mailto:hi@tavonline.net"
                          className="pull-right site-btn icon hidden-xs "
                        >
                          Hire Me
                          <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </nav>
                </header>

                <div className=" mt-6 bg-gray-100 rounded-lg m-w-auto py-8 mb-8   ">
                  <br />
                  <Outlet />
                </div>

                <footer className="">
                  <div className="footer flex bg-black rounded-lg w-full h-16">
                    <div className="name text-slate-100 m-4  mr-80 ml-5 ">Henry Rooey</div>
                    <div className="copyright m-4 ">
                    <span className="text-slate-400"> © 2017 All rights reserved. Designed by</span>
                     
                      <a  className="text-slate-100 hover:text-cyan-400" href="https://themeforest.net/user/tavonline">
                        {" "}
                        tavonline{" "}
                      </a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
