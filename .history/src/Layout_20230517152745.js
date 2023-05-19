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
                    <h3>HENRY ROONEY</h3>
                    <span>Creative Designer</span>
                    <figure>
                      <img src="https://html.tavonline.co/mat/default/images/profile.jpg" alt="#" />
                    </figure>

                    <ul>
                      <li></li>
                      <li>
                     Name: <span> Chris Johnson</span>
    //                 </li>
    //                 <li>
    //                   Birthday: <span>06 December 1987</span>
    //                 </li>
    //                 <li>
    //                   Job : <span> Freelancer</span>
    //                 </li>
    //                 <li>
    //                   Email: <span>henry@domain.com</span>
    //                 </li>
    //                 <li>
    //                   Skype: <span>henryrooney85</span>
    //                 </li>
                    </ul>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </div>


















      <div className="flex">
    

    <nav>
      <ul className="flex">
        <li>
          <Link to="/home">
          <i class="fa-solid fa-house"></i>
          </Link>
        </li>
        <li>
          <Link to="/resums">Resums</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  <div>

  </div>
    </div>
    
    <div><br />
    <Outlet />
    </div>
      
      </div>
  )
   
};

export default Layout;