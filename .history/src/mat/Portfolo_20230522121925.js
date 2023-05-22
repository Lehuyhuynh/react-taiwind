import React from 'react';

const Portfolo = () => {
  return (
    <div id="portfolo">
      <section className="m-7">
        <div className="content-header">
          <div className="section-title text-lg"><span></span><h2>Portfolo</h2>
          <div className='my-6' style={{height:"7px", width :"65px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
          <div className="filters-container">
            <ul className='flex mb-6 '>
              <li className="cbp-filter-item mr-2.5 hover:text-amber-500">All</li>
              <li className="cbp-filter-item mr-2.5 hover:text-amber-500">Web Design</li>
              <li className="cbp-filter-item mr-2.5 hover:text-amber-500">Motion Graphic</li>
              <li className="cbp-filter-item mr-2.5 hover:text-amber-500">Illustratio</li>
              <li className="cbp-filter-item hover:text-amber-500">Photography</li>
            </ul>
          </div>

          <div id="grip-container" className="grid  grid-cols-3 grid-rows-3 mb-5  ">
            <div className="cbp-item border-8 rounded-lg bg-white group">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon1 text-center text-2xl absolute text-black font-bold letter-[2px] bottom-0 left-1/2 opacity-0 translate-x-[-2/4] ease-in-out text-white py-[10px] px-[15px] min-w-[50px] rounded-full bg-orange-500 group-hover:left-[43%] group-hover:opacity-100">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption >
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>


            <div className="cbp-item border-8 rounded-lg bg-white group">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon2 text-center text-2xl absolute text-black font-bold letter-[2px] bottom-0 left-1/2 opacity-0 translate-x-[-2/4] ease-in-out text-white py-[10px] px-[15px] min-w-[50px] rounded-full bg-orange-500 group-hover:left-[43%] group-hover:opacity-100">
                  <i class="fa-solid fa-play"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-02.jpg" alt="" />
                  <figcaption >
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>


            <div className="cbp-item border-8 rounded-lg bg-white group">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon3 text-center text-2xl absolute text-black font-bold letter-[2px] bottom-0  opacity-0 translate-x-[-2/4] ease-in-out text-white py-[10px] px-[15px] min-w-[50px] rounded-full bg-orange-500 group-hover:right-[43%] group-hover:opacity-100">
                  <i class="fa-solid fa-image"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption >
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white ">
              <a className='cbp-single hover:icon ' href="">
                <figure>
                  <div className="icon text-center text-2xl absolute text-black font-bold letter-[2px] bottom-0 left-1/2 opacity-0 translate-x-[-2/4] ease-in-out text-white py-[10px] px-[15px] min-w-[50px] rounded-full bg-orange-500 group-hover:left-[43%] group-hover:opacity-100">
                  <i class="fa-solid fa-play"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-02.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span><br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-image"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-04.jpg" alt="" />
                  <figcaption className=''>
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white" >
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span><br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span><br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span><br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span> <br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>


            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single' href="">
                <figure>
                  <div className="icon">
                  <i class="fa-solid fa-clone"></i>
                  </div>
                  <img src="https://html.tavonline.co/mat/default/images/works/work-01.jpg" alt="" />
                  <figcaption>
                    <span className="title">Babel Admin</span><br />
                    <span className="info">An admin template design.</span>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>

          <div className="js  text-center ">
            <button className='border-solid border-2 rounded-lg bg-yellow-500 hover:bg-amber-800' >
              <a  href="">load More(3)</a>
            </button>
            
          </div>
        </div>
      </section>
    </div>


  );
};

export default Portfolo;