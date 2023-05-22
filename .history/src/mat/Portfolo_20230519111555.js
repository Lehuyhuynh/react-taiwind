import React from 'react';

const Portfolo = () => {
  return (
    <div id="portfolo">
      <section className="t">
        <div className="content-header">
          <div className="section-title"><span></span><h2>Portfolo</h2></div>
          <div className="filters-container">
            <ul className='flex'>
              <li className="cbp-filter-item">All</li>
              <li className="cbp-filter-item">Web Design</li>
              <li className="cbp-filter-item">Motion Graphic</li>
              <li className="cbp-filter-item">Illustratio</li>
              <li className="cbp-filter-item">Photography</li>
            </ul>
          </div>

          <div id="grip-container" className="t">
            <div className="cbp-item">
              <a className='cbp-single' href="https://html.tavonline.co/mat/default/images/portfolio-content/image-1.jpg">
                fig
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
};

export default Portfolo;