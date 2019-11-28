import React, { Component } from "react";
import i1 from "../utils/img/i1.jpeg";
import i2 from "../utils/img/i2.jpeg";
import i3 from "../utils/img/i3.jpeg";
import next from "../utils/img/next.webp";

class BlogPost extends Component {
  render() {
    return (
      <div className="blog">
        <h1 className="blog_heading">Tips & Articles</h1>
        <div className="containe">
          <div
            className="card blog_card"
            style={{
              width: "22vw"
            }}
          >
            <img src={i1} className="card-img-top" alt="..." />
            <div className="card-body">
              <span className="blog_span">Culture</span>
              <h3 className="blog_subhead">
                8 Best homestay in Philippines that you don't miss out{" "}
              </h3>
              <p className="card-text pp">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div
            className="card  blog_card"
            style={{
              width: "22vw"
            }}
          >
            <img src={i2} className="card-img-top" alt="..." />
            <div className="card-body">
              <span className="blog_span">Travel</span>
              <h3 className="blog_subhead">
                Even the all-powerful Pointing has no control about the blind
                texts
              </h3>
              <p className="card-text pp">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card  blog_card"
            style={{
              width: "22vw"
            }}
          >
            <img src={i3} className="card-img-top" alt="..." />
            <div className="card-body">
              <span className="blog_span">Nashe</span>
              <h3 className="blog_subhead">
                Even the all-powerful Pointing has no control about the blind
                texts
              </h3>
              <p className="card-text pp">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="main_btn">
          View All Blogs
          <img src={next} alt="" />
        </a>
      </div>
    );
  }
}

export default BlogPost;
