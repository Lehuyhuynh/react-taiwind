import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <img src="" alt="" />
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
                  <div className="flex">
                  <div className="w-[1px] h-[278px] bg-slate-300 mt-[-1rem] ml-3 left-[28px] relative"></div>

<ul className="m-5 ">
  <li className=" bg-yellow-500 py-2.5 px-3 rounded-full w-1/5 top-[-40px] relative left-[-12px]">
  <h1>oo</h1>
  </li>
  <li className="mb-5 flex">
  <div className=" right-[16px] ml-[1.25rem] h-2 w-[0.5rem] bg-orange-400 rounded-full z-10 relative"></div>
    <h2 className="mt-[-9px] ml-[5px]">Name: <span> Chris Johnson</span></h2>
  </li>
  <li className="mb-5 flex">
  <div className="ml-[1.25rem] h-2 w-[0.65rem] bg-orange-400 rounded-full z-10 relative right-[17px]"></div>
    <h2 className="mt-[-9px] ml-[5px]">Birthday: <span>06 December 1987</span></h2>
  </li>
  <li className="mb-5 flex">
  <div className="ml-[1.25rem] h-2 w-[0.65rem] bg-orange-400 rounded-full z-10 relative right-[17px]"></div>
    <h2 className="mt-[-9px] ml-[5px]">Job : <span> Freelancer</span></h2>
  </li>
  <li className="mb-5 flex">
  <div className="ml-[1.25rem] h-2 w-[0.65rem] bg-orange-400 rounded-full z-10 relative right-[17px]"></div>
   <h2 className="mt-[-9px] ml-[5px]"> Email: <span>henry@domain.com</span></h2>
  </li>
  <li className="mb-5 flex">
  <div className="ml-[1.25rem] h-2 w-[0.65rem] bg-orange-400 rounded-full z-10 relative right-[17px]"></div>
    <h2 className="mt-[-9px] ml-[5px]">Skype: <span>henryrooney85</span></h2>
  </li>
</ul>
                  </div>

                  <div className="t text-center">
                    <button className=" my-6  ml-[67px] mr-[68px] border-solid  border-indigo-600 rounded-lg  flex p-[5px] bg-yellow-500 hover:bg-amber-800 ">
                      <h4 className="">Download Cv</h4>
                      <div className="rounded-full py-0.5 px-1.5 bg-white ">
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
                        <Link to="/">
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

                    <div className="hidden-md social-icons pull-right flex ml-28 h-16 mr-[20px]">
                      <a
                        className="fb  my-5 mx-2  hover:text-indigo-600"
                        href="fb "
                      >
                        <i class="fa-brands fa-facebook" style={{fontSize:'12px'}}></i>
                      </a>

                      <a
                        className="fb  my-5 mx-2  hover:text-indigo-300"
                        href="tw"
                      >
                        <i class="fa-brands fa-twitter" style={{fontSize:'12px'}}></i>
                      </a>

                      <a
                        className="fb  my-5 mx-2 hover:text-red-500"
                        href="ins"
                      >
                        <i class="fa-brands fa-instagram" style={{fontSize:'12px'}}></i>
                      </a>

                      <a
                        className="fb  my-5  mx-2 hover:text-amber-200"
                        href="dr"
                      >
                        <i class="fa-brands fa-dribbble" style={{fontSize:'12px'}}></i>
                      </a>

                      <div className="my-5 mx-2   rounded-lg bg-yellow-500 hover:bg-amber-800  " style={{padding:""}} >
                        <a
                          href="mailto:hi@tavonline.net"
                          className="pull-right site-btn icon  flex "
                        >
                          Hire Me

                          <div className="rounded-full  px-[5px] bg-white">
                          <i class="fa fa-paper-plane" aria-hidden="true"></i>
                          </div>
                          
                        </a>
                      </div>
                    </div>
                  </nav>
                </header>

                <div className=" mt-6 bg-gray-100 rounded-lg m-w-auto pb-8 mb-8   ">
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
