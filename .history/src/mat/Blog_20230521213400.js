import React from 'react';

const Blog = () => {
  return (
    <div id="portfolo">
      <section className="m-7">
        <div className="content-header">
          <div className="section-title text-lg"><span></span><h2>Portfolo</h2>
          <div className='my-6' style={{height:"7px", width :"65px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
        
          <div id="grip-container" className="grid  grid-cols-3 grid-rows-3 mb-5  ">
            <div className="cbp-item border-8 rounded-lg bg-white">
              <a className='cbp-single hover:icon' href="">
                <figure>
                  <div className="icon text-center text-2xl absolute text-black font-bold  bottom-0 left-1/2 opacity-0  text-white">
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

            <div className="cbp-item border-8 rounded-lg bg-white hover:icon">
              <a className='cbp-single hover:icon ' href="">
                <figure>
                  <div className="icon bg-yellow-500">
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

          <div className="js ">
            <button className='border-solid border-2 border-indigo-600 rounded-lg text-center' >
              <a  href="">load More(3)</a>
            </button>
            
          </div>
        </div>
      </section>
    </div>


  );
};

export default Blog;