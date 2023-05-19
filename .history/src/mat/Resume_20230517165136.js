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

              <div className="education-history">
                <ul className="timeline">
                  <li>
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
                    <p>Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.</p>
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