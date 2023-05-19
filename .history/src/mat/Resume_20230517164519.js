import React from 'react';

const Resume = () => {
  return (
    <div>
      <div id="resume">
        <div className="row">
          <section className="education">
            <div className="section-title"><span></span><h2>Resume</h2></div>
            <div className="row">
              <div className="working-history">
                <ul className="timeline">
                  <li>
                  <i class="fa-solid fa-suitcase"></i>
                  <h2 className="time-title"> Working History </h2>
                  </li>

                  <li>
                    <h3 className="line-title">Art Director - Facebook Inc</h3>
                    <span>2010 - Present</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;