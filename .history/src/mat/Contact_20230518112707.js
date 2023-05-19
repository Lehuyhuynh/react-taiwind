import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="row ">
          <div className="row flex">
          <section className="contact-form w-3/6">
            <div className="section-title" style={{marginBottom:"20px"}}><span></span><h2>Contact Form</h2></div>
            <form action="site-form">
              <div className="row">
                <div className="t">
                  <input type="text" className="site-input" placeholder='Name' />
                </div>

                <div className="t">
                  <input type="text" className="site-input" placeholder='Email' />
                </div>

                <div class="col-md-12">
                  <textarea class="site-area" placeholder="Message"></textarea>
                </div>

                <div class="col-md-12 top_15 bottom_30">
                  <button class="site-btn" type="submit">Submit</button>
                </div>


              </div>
            </form>
          </section>

          <secction className="contact-info">
            <div className="section-title " style={{marginBottom:"20px"}}><span></span><h2>Contact Informations</h2></div>
            <ul>
              <li><span>Address:</span> 107727 Santa Monica Boulevard Los Angeles</li>
              <li><span>Phone:</span> +38 012-3456-7890</li>
              <li><span>Job:</span> Freelancer</li>
              <li><span>E-mail:</span> chris@domain.com</li>
              <li><span>Skype:</span> chrisjohnson85</li>
              <li>
                <div class="social-icons top_15"> 
                  <a class="fb" href="#"><i class="fa-brands fa-facebook"></i></a> 
                  <a class="tw" href="#"><i class="fa-brands fa-twitter"></i></a> 
                  <a class="ins" href="#"><i class="fa-brands fa-instagram"></i></a> 
                  <a class="dr" href="#"><i class="fa-brands fa-dribbble"></i></a> 
                </div>
              </li>
            </ul>
          </secction>
          </div>

          {/* Contact Map. */}

          <section className="contact-map">
            <div className="section-title"><span></span><h2>Contact Map.</h2></div>
            <iframe  className='w-full h-96 ' src="https://www.google.com/maps/embed?pb=
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