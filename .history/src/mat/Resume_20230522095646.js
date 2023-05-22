import React from 'react';

const Resume = () => {
  return (
    <div>
      <div id="resume" style={{margin:"20px"}}>
        <div className="row">
          <section className="education">
            <div className="section-title text-lg "><span></span><h2>Resume</h2>
            <div className='my-6' style={{height:"7px", width :"65px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <div className="row flex">
              <div className="working-history pb-7">
                <ul className="timeline ml-2.5 mt-7 mr-1.5">
                  <li className="w-[1px] h-[300px] bg-yellow"></li>
                  <li className='flex mb-8 '>
                  <div className='bg-yellow-500 py-3 px-4 rounded-full	'><i class="fa-solid fa-suitcase"></i></div>
                  <h2 className="time-title"> Working History </h2>
                  </li>

                  <li className='mb-6 flex'>
                    <div className="ml-[1.25rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                    <div className="ml-2">
                      <h3 className="line-title">Art Director - Facebook Inc</h3>
                      <span>2010 - Present</span>
                       <p>Expenses as material breeding insisted building to in.
                      Continual so distrusts pronounce by unwilling listening.
                      Thing do taste on we manor.</p>
                    </div>
                  </li>

                  <li className='mb-6 flex' >
                  <div className="ml-[1.25rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                  <div className="ml-2">
                     <h3 className="line-title">Senior Designer - Google</h3>
                    <span>2008 - 2010</span>
                    <p>So insisted received is occasion advanced honoured.
                     Among ready to which up.
                     Attacks smiling and may out assured moments man nothing outward.</p>
                  </div>
                    
                  </li>

                  <li className=' flex' >
                  <div className="ml-[1.25rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                  <div className="ml-2">
                     <h3 className="line-title">Junior Designer - Creative Shake</h3>
                    <span>2005 - 2008</span>
                    <p>Excited him now natural saw passage offices you minuter. 
                    At by asked being court hopes. 
                    Farther so friends am to detract.</p>
                  </div>
                    
                  </li>

                  
                </ul>
              </div>

              <div className="education-history pb-7">
                <ul className="timeline ml-2.5 mt-7">
                  <li className='flex mb-8'>
                  <div className=' bg-yellow-500 py-3 px-4 rounded-full	'><i class="fa-solid fa-graduation-cap"></i></div>
                  <h2 className="time-title"> Education History </h2>
                  </li>

                  <li className='mb-6 flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                  <div className="ml-2">
                     <h3 className="line-title">Abc University of Los Angeles</h3>
                    <span>2004 - 2009</span>
                    <p>Expenses as material breeding insisted building to in.
                     Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.</p>
                  </div>
                    
                  </li>


                  <li className='mb-6 flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                  <div className="ml-2">
                     <h3 className="line-title">Drawing Course</h3>
                    <span>2003 - 2004</span>
                    <p>So insisted received is occasion advanced honoured. 
                    Among ready to which up. 
                    Attacks smiling and may out assured moments man nothing outward.</p>
                  </div>
                    
                  </li>

                  <li className=' flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full"></div>
                  <div className="ml-2">
                     <h3 className="line-title">Abc High School</h3>
                    <span>2000 - 2003</span>
                    <p>Excited him now natural saw passage offices you minuter.
                     At by asked being court hopes. 
                    Farther so friends am to detract</p>
                  </div>
                    
                  </li>
        
                </ul>
              </div>

            </div>
          </section>
        </div>

        <div className="row">
          <section className="clients">
            <div className="section-title text-lg"><span></span><h2>Clients</h2>
            <div className='my-6' style={{height:"7px", width :"55px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
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
           <div className="section-title text-lg"><span></span><h2>Testimonials</h2>
           <div className='my-6' style={{height:"7px", width :"98px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
           
          <div className="flex ">
              <div className="owl-carousel row grid gap-4 grid-cols-3 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>
            <div className="owl-carousel row grid gap-4 grid-cols-3 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>


              <div className="owl-carousel row grid gap-4 grid-cols-3 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment">
                    <div className="top-section flex">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span> <br />
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>

              {/* <div className="owl-carousel row flex" data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>

              <div className="owl-carousel row flex" data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-72">
                  <div className="comment">
                    <div className="top-section">
                      <figure >
                        <img className='rounded-full w-2/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name">Jack Garratt</span>
                        <span className="jod">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div> */}
              
           </div>

           
        </div>

      </div>
    </div>
  );
};

export default Resume;