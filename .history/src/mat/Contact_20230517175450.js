import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="row flex">
          <section className="contact-form">
            <div className="section-title"><span></span><h2>Contact Form</h2></div>
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
            <div className="section-title"><span></span><h2>Contact Informations</h2></div>
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

          {/* Contact Map. */}

        </div>
      </div>
    </div>
  );
};

export default Contact;