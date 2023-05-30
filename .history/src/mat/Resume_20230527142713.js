import React from 'react';

const Resume = () => {
  return (
    <div>
      <div id="resume " >
        <div className="row" style={{margin: '0 20px'}}>
          <section className="education pb-8">
            <div className="section-title text-lg "><span></span><h2>Resume</h2>
            <div className='my-6' style={{height:"7px", width :"65px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <div className="row flex">
              <div className="working-history pb-7 flex">
              <div className="w-[1px] h-[370px] bg-slate-300 mt-20 ml-3 left-8 relative ml-[-15px]"></div>
                <ul className="timeline ml-2.5 mt-7 mr-1.5">
                  
                  <li className='flex mb-8 '>
                  <div className='bg-yellow-500 py-3 px-4 rounded-full  	'><i class="fa-solid fa-suitcase"></i></div>
                  <h2 className="time-title mt-[10px] ml-[15px]"> Working History </h2>
                  </li>

                  <li className='mb-6 flex'>
                    <div className="ml-[1.25rem]  h-2 w-[1.375rem] bg-orange-400 rounded-full relative z-10"></div>
                    <div className="ml-2 ml-[15px] mt-[-8px]">
                      <h3 className="line-title">Art Director - Facebook Inc</h3>
                      <span>2010 - Present</span>
                       <p>Expenses as material breeding insisted building to in.
                      Continual so distrusts pronounce by unwilling listening.
                      Thing do taste on we manor.</p>
                    </div>
                  </li>

                  <li className='mb-6 flex' >
                  <div className="ml-[1.25rem] h-2 w-[1.375rem] bg-orange-400 rounded-full z-10"></div>
                  <div className="ml-2 ml-[15px] mt-[-8px]">
                     <h3 className="line-title">Senior Designer - Google</h3>
                    <span>2008 - 2010</span>
                    <p>So insisted received is occasion advanced honoured.
                     Among ready to which up.
                     Attacks smiling and may out assured moments man nothing outward.</p>
                  </div>
                    
                  </li>

                  <li className=' flex' >
                  <div className="ml-[1.25rem] h-2 w-[1.375rem] bg-orange-400 rounded-full z-10"></div>
                  <div className="ml-2 ml-[15px] mt-[-8px]">
                     <h3 className="line-title">Junior Designer - Creative Shake</h3>
                    <span>2005 - 2008</span>
                    <p>Excited him now natural saw passage offices you minuter. 
                    At by asked being court hopes. 
                    Farther so friends am to detract.</p>
                  </div>
                    
                  </li>

                  
                </ul>
              </div>

              <div className="education-history pb-7 flex">
              <div className="w-[1px] h-[370px] bg-slate-300 mt-20 ml-3 left-8 relative"></div>
                <ul className="timeline ml-2.5 mt-7">
                  <li className='flex mb-8'>
                  <div className=' bg-yellow-500 py-3 px-4 rounded-full	'><i class="fa-solid fa-graduation-cap"></i></div>
                  <h2 className="time-title mt-[10px] ml-[15px]"> Education History </h2>
                  </li>

                  <li className='mb-6 flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full z-10"></div>
                  <div className="ml-2 ml-[15px] mt-[-8px]">
                     <h3 className="line-title">Abc University of Los Angeles</h3>
                    <span>2004 - 2009</span>
                    <p>Expenses as material breeding insisted building to in.
                     Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.</p>
                  </div>
                    
                  </li>


                  <li className='mb-6 flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full z-10"></div>
                  <div className="ml-2 ml-[15px] mt-[-8px]">
                     <h3 className="line-title">Drawing Course</h3>
                    <span>2003 - 2004</span>
                    <p>So insisted received is occasion advanced honoured. 
                    Among ready to which up. 
                    Attacks smiling and may out assured moments man nothing outward.</p>
                  </div>
                    
                  </li>

                  <li className=' flex' >
                  <div className="ml-[1.35rem] h-2 w-[1.375rem] bg-orange-400 rounded-full z-10"></div>
                  <div className="ml-2 ml-[15px] mt-[-8px]">
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

        <div className="row border bg-gray-300" style={{background: 'white'}}>
          <section className="clients py-8 px-[10px]">
            <div className="section-title pl-[10px] text-lg"><span></span><h2>Clients</h2>
            <div className='my-8' style={{height:"7px", width :"55px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <div className="row flex">
              <div className="py-[26px] px-[16px] bg-red-300">
                <div className="client w-">
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
        <div className="row pt-8" style={{margin: '0 20px'}}>
           <div className="section-title text-lg"><span></span><h2>Testimonials</h2>
           <div className='my-6' style={{height:"7px", width :"98px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
           
          <div className=" ">
              <div className="owl-carousel row grid gap-4 grid-cols-3 my-4 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>
            <div className="owl-carousel row grid gap-4 grid-cols-3  my-4 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>


              <div className="owl-carousel row grid gap-4 grid-cols-3 my-4 " data-items="3" data-autoplay="3000" data-pagination="true" style={{}}>

           
                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>

                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>


                <div className="item rounded-lg bg-white w-60">
                  <div className="comment  px-3 py-3">
                    <div className="top-section flex mb-[10px]">
                      <figure >
                        <img className='rounded-full w-3/6' src="https://html.tavonline.co/mat/default/images/testimonial-2.jpg" alt="" />
                      </figure>

                      <div className="name-info">
                        <span className="name ml-[-40px]">Jack Garratt</span> <br />
                        <span className="jod ml-[-40px]">Freelance</span>
                      </div>
                    </div>
               
                    <p>Great designer!
                     he finished our work wonderfully and just in time.
                     thanks for everything</p>
                  </div>
                </div>
              </div>
              <div class="button">
                                <label for="one" class="one action"></label>
                                <label for="two" class="two action"></label>
                                <label for="three" class="three action"></label>
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
