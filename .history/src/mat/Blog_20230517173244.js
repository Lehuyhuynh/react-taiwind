import React from 'react';

const Blog = () => {
  return (
    <div>
      <div id="blog">
        <div className="row">
          <section className="blog">
            <div className="content-header">
              <div className="section-title"><span></span><h2>Blog Posts</h2></div>

            </div>
            <div id="grid-blog" className="row cbp cbp-ready">
              <div className="cbp-wrapper-outer">
                <div className="cbp-warapper">
                  <div className="cbp-item">
                    <div className="cbp-item-wrapper">
                      <a href="" className='blog-box'>
                        <div className="blog-img">
                          <img src="https://html.tavonline.co/mat/default/images/blogs/blog-6.jpg" alt="" />
                        </div>

                        <div className="blog-box-info">
                        <span class="category">General</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;