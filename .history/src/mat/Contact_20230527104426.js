import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="row ">
          <div className="row flex mx-7">
          <section className="contact-form w-3/6">
            <div className="section-title text-lg " style={{marginBottom:"20px"}}><span></span><h2>Contact Form</h2>
            <div className='my-6' style={{height:"7px", width :"110px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <form action="site-form">
              <div className="row">
                <div className="mb-2.5 ">
                  <input type="text" className="site-input w-80 h-9" placeholder='Name' />
                </div>

                <div className="mb-2.5">
                  <input type="text" className="site-input w-80 h-9" placeholder='Email' />
                </div>

                <div class="col-md-12 mb-5">
                  <textarea className="site-area w-80 h-16" placeholder="Message"></textarea>
                </div>

                <div className="t">
                  <button className="site-btn m-4 border-solid border-2 border-indigo-600 rounded-lg bg-yellow-500 hover:bg-amber-800 p-[3px]" type="submit">Submit</button>
                </div>


              </div>
            </form>
          </section>

          <secction className="contact-info">
            <div className="section-title text-lg " style={{marginBottom:"20px"}}><span></span><h2>Contact Informations</h2>
            <div className='my-6' style={{height:"7px", width :"170px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <ul>
              <li><span>Address:</span> 107727 Santa Monica Boulevard Los Angeles</li>
              <li><span>Phone:</span> +38 012-3456-7890</li>
              <li><span>Job:</span> Freelancer</li>
              <li><span>E-mail:</span> chris@domain.com</li>
              <li className='mb-5'><span>Skype:</span> chrisjohnson85</li>
              <li>
                <div class="social-icons top_15"> 
                  <a className="fb mr-3 hover:text-indigo-600" href="#"><i class="fa-brands fa-facebook"></i></a> 
                  <a className="tw mr-3 hover:text-indigo-300" href="#"><i class="fa-brands fa-twitter"></i></a> 
                  <a className="ins mr-3 hover:text-red-500" href="#"><i class="fa-brands fa-instagram"></i></a> 
                  <a className="dr hover:text-amber-200" href="#"><i class="fa-brands fa-dribbble"></i></a> 
                </div>
              </li>
            </ul>
          </secction>
          </div>

          {/* Contact Map. */}

          <section className="contact-map">
            <div className="section-title text-lg mx-7"><span></span><h2>Contact Map.</h2>
            <div className='my-6' style={{height:"7px", width :"103px", backgroundColor:"#FFBF00", marginTop:"-10px"}}></div></div>
            <iframe  className='w-full h-96 px-7' src="https://www.google.com/maps/embed?pb=
            !1m18!1m12!1m3!1d24396.455763004884!2d-115.13108354428735!3d36
            .18912977254862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+Kaliforniya%2C+Birle%
            C5%9Fik+Devletler!5e0!3m2!1str!2str!4v1509525039851"></iframe>
          </section>


        </div>
      </div>
    </div>
  );
};

export default Contact;