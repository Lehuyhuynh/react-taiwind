import React from 'react';

const Home = () => {
  return (
    <div id="home">
       <div className="row">
        <section className="about-me">
          <div className="section-title"><span><h2>About Me</h2></span></div>
          <p className="t">Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. <br />
          <br /> Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
          </p>
        </section>
       </div>

       <div className="row">
        <section className="services">
          <div className="section-title"><span><h2>My Services</h2></span></div>
          <div className="row">
            <div className="t">
              <div className="service">
                <div className="icon">
                <i class="fa-solid fa-code"></i>
                </div>
                <p>Web Development</p>
                <span>I have been working on web design for 10 years.</span>
              </div>
            </div>

            <div className="t">
              <div className="service">
                <div className="icon">
                <i class="fa-solid fa-link"></i>
                </div>
                <p>Branding Identity</p>
                <span>We will make you a brand that is catchy and leaves a trace.</span>
              </div>
            </div>

            <div className="t">
              <div className="service">
                <div className="icon">
                <i class="fa-solid fa-bezier-curve"></i>
                </div>
                <p>Illustrator</p>
                <span>I have been working on illustration design for 6 years</span>
              </div>
            </div>

            <div className="t">
              <div className="service">
                <div className="icon">
                <i class="fa-regular fa-calendar-days"></i>
                </div>
                <p>Fast Delivery</p>
                <span>I deliver your business as fast as possible.</span>
              </div>
            </div>


          </div>
        </section>
       </div>

       <div className="row">
         <section className="design-skills">
            <div className="section-title">
              <ul className="skill-list">
                <li>
                  <h3>Photoshop</h3>
                  .progr
                </li>
              </ul>
            </div>
         </section>

         <section className="code-skills"></section>
       </div>
      
    </div>
  );
};

export default Home;