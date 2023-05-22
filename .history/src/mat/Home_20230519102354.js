import React from 'react';

const Home = () => {
  return (
    <div id="home " style={{margin:"20px"}}>
       <div className="row my-8">
        <section className="about-me">
          <div className="section-title"><h2 className='text-lg'>About Me</h2>
          <div style={{height:"7px", width :"78px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div>
          </div>
          <p className="t">Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. <br />
          <br /> Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
          </p>
        </section>
       </div>

       <div className="row bg-white my-8  ">
        <section className="services">
          <div className="section-title " ><span><h2 className='text-lg'>My Services</h2></span>
          <div className='my-6' style={{height:"7px", width :"93px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div>
          </div>
          <div className="row flex">
            <div className="bg-gray-300 m-4 rounded-lg">
              <div className="service m-3">
                <div className="icon text-4xl">
                <i class="fa-solid fa-code"></i>
                </div>
                <p>Web Development</p>
                <span>I have been working on web design for 10 years.</span>
              </div>
            </div>

            <div className="bg-gray-300 m-4 rounded-lg">
              <div className="service m-3">
                <div className="icon text-4xl">
                <i class="fa-solid fa-link"></i>
                </div>
                <p>Branding Identity</p>
                <span>We will make you a brand that is catchy and leaves a trace.</span>
              </div>
            </div>

            <div className="bg-gray-300 m-4 rounded-lg">
              <div className="service m-3">
                <div className="icon text-4xl">
                <i class="fa-solid fa-bezier-curve"></i>
                </div>
                <p>Illustrator</p>
                <span>I have been working on illustration design for 6 years</span>
              </div>
            </div>

            <div className="bg-gray-300 m-4 rounded-lg" >
              <div className="service m-3">
                <div className="icon text-4xl">
                <i class="fa-regular fa-calendar-days"></i>
                </div>
                <p>Fast Delivery</p>
                <span>I deliver your business as fast as possible.</span>
              </div>
            </div>


          </div>
        </section>
       </div>

       <div className="row flex my-8 ">
         <section className="design-skills w-3/6">
            <div className="section-title"><span></span><h2>Design Skills</h2></div>
              <ul className="skill-list">
                <li>
                  <h3>Photoshop</h3>
                  <div className="progress w-full h-1 bg-gray-100">
                    <div className="percentege w-4/"></div>
                  </div>
                </li>

                <li>
                  <h3>Sketch</h3>
                  <div className="progress">
                    <div className="percentege"></div>
                  </div>
                </li>

                <li>
                  <h3>Adobe Xd</h3>
                  <div className="progress">
                    <div className="percentege"></div>
                  </div>
                </li>


                
              </ul>
         </section>

         <section className="code-skills">
         <div className="section-title"><span></span><h2>Code Skills</h2></div>
              <ul className="skill-list">
                <li>
                  <h3>Javascript</h3>
                  <div className="progress">
                    <div className="percentege"></div>
                  </div>
                </li>

                <li>
                  <h3>HTML5</h3>
                  <div className="progress">
                    <div className="percentege"></div>
                  </div>
                </li>

                <li>
                  <h3>CSS3</h3>
                  <div className="progress">
                    <div className="percentege"></div>
                  </div>
                </li>
                

                
              </ul>
         </section>
       </div>
      
    </div>
  );
};

export default Home;