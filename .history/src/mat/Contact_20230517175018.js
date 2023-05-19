import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="row">
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
          </secction>
        </div>
      </div>
    </div>
  );
};

export default Contact;