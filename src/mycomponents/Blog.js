import React from "react";
import "./Blog.css";
import blogImage from "./Image Container.png";


function Blog() {

  return (
    <div className="blog">
      {/* --- Section Title --- */}
      <div className="blogTitle">
        <div className="blogTitle1">
          <h1 className="blog-h1 display-4">Our blog</h1>
          <div className="blog-underline"></div>
          <p className="fs-5 pt-3" style={{ color: "grey" }}>
            An insight the incredible experience in the world
          </p>
        </div>
      </div>
      <div className="blog-content">
        <div >
          <img src={blogImage} className="card-img blogImg" alt="..." />
        </div>
        <div className="blog-matter">
          <h1 className="blog-h1 display-4">Beautiful Italy</h1>
          <h1 className="blog-h1 display-4">Let's Travel</h1>

          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound the actual teachings of the great
            explorer of the truth, the master- builder of human happiness. No
            one rejects, dislike, or avoids plasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremly painful. Nor
            again is there anyone who loves or pursues.
          </p>
          <p style={{color:"#ff7757"}}>
            Read More &rarr;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
