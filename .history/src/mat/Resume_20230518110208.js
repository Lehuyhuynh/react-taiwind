import React from 'react';

const Resume = () => {
  return (
    <div>
      <div id="resume" style={{margin:"20px"}}>
        <div className="row">
          <section className="education">
            <div className="section-title"><span></span><h2>Resume</h2></div>
            <div className="row flex">
              <div className="working-history pb-7">
                <ul className="timeline ml-2.5 mt-7">
                  <li className='flex'>
                  <i class="fa-solid fa-suitcase"></i>
                  <h2 className="time-title"> Working History </h2>
                  </li>

                  <li>
                    <h3 className="line-title">Art Director - Facebook Inc</h3>
                    <span>2010 - Present</span>
                    <p>Expenses as material breeding insisted building to in.
                     Continual so distrusts pronounce by unwilling listening.
                     Thing do taste on we manor.</p>
                  </li>

                  <li>
                    <h3 className="line-title">Senior Designer - Google</h3>
                    <span>2008 - 2010</span>
                    <p>So insisted received is occasion advanced honoured.
                     Among ready to which up.
                     Attacks smiling and may out assured moments man nothing outward.</p>
                  </li>

                  <li>
                    <h3 className="line-title">Junior Designer - Creative Shake</h3>
                    <span>2005 - 2008</span>
                    <p>Excited him now natural saw passage offices you minuter. 
                    At by asked being court hopes. 
                    Farther so friends am to detract.</p>
                  </li>
                </ul>
              </div>

              <div className="education-history pb-7">
                <ul className="timeline ml-2.5 mt-7">
                  <li className='flex'>
                  <i class="fa-solid fa-graduation-cap"></i>
                  <h2 className="time-title"> Education History </h2>
                  </li>

                  <li>
                    <h3 className="line-title">Abc University of Los Angeles</h3>
                    <span>2004 - 2009</span>
                    <p>Expenses as material breeding insisted building to in.
                     Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.</p>
                  </li>

                  <li>
                    <h3 className="line-title">Drawing Course</h3>
                    <span>2003 - 2004</span>
                    <p>So insisted received is occasion advanced honoured. 
                    Among ready to which up. 
                    Attacks smiling and may out assured moments man nothing outward.</p>
                  </li>

                  <li>
                    <h3 className="line-title">Abc High School</h3>
                    <span>2000 - 2003</span>
                    <p>Excited him now natural saw passage offices you minuter.
                     At by asked being court hopes. 
                    Farther so friends am to detract.</p>
                  </li>
                </ul>
              </div>

            </div>
          </section>
        </div>

        <div className="row">
          <section className="clients">
            <div className="section-title"><span></span><h2>Clients</h2></div>
            <div className="row flex">
              <div className="t">
                <div className="client w-5/6">
                  <img src="https://html.tavonline.co/mat/default/images/client-01.jpg" alt="" />
                </div>
              </div>

              <div className="t">
                <div className="client w-5/6">
                  <img src="https://html.tavonline.co/mat/default/images/client-02.jpg" alt="" />
                </div>
              </div>

              <div className="t">
                <div className="client w-5/6">
                  <img src="https://html.tavonline.co/mat/default/images/client-03.jpg" alt="" />
                </div>
              </div>

              <div className="t">
                <div className="client w-5/6">
                  <img src="https://html.tavonline.co/mat/default/images/client-04.jpg" alt="" />
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Testimonials */}
        <div className="row">
           <section className="testimonials"></section>
           <div className="section-title"><span></span><h2>Testimonials</h2></div>
           <div className="owl-carousel row flex" data-items="3" data-autoplay="3000" data-pagination="true">
              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure className=''>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Jack Garratt</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-3.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">April M. Griffin</span>
                      <span className="jod">Founder</span>
                    </div>
                  </div>
                  <hr />
                    <p>Our logo and business card design look great. Thanks Henry</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-1.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Larry M. Johnson</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Henry is a very creative and talented designer. 
                    I do not hesitate to work again.</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Jack Garratt</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-3.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">April M. Griffin</span>
                      <span className="jod">Founder</span>
                    </div>
                  </div>
                  <hr />
                    <p>Our logo and business card design look great. Thanks Henry</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-1.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Larry M. Johnson</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Henry is a very creative and talented designer. 
                    I do not hesitate to work again.</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Jack Garratt</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-3.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">April M. Griffin</span>
                      <span className="jod">Founder</span>
                    </div>
                  </div>
                  <hr />
                    <p>Our logo and business card design look great. Thanks Henry</p>
                </div>
              </div>

              <div className="item">
                <div className="comment">
                  <div className="top-section">
                    <figure>
                     <img src="https://html.tavonline.co/mat/default/images/testimonial-1.jpg" alt="" />
                    </figure>

                    <div className="name-info">
                      <span className="name">Larry M. Johnson</span>
                      <span className="jod">Freelance</span>
                    </div>
                  </div>
                  <hr />
                    <p>Henry is a very creative and talented designer. 
                    I do not hesitate to work again.</p>
                </div>
              </div>




           </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;