import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">About </h3>
                  <p>
                     The world has become so fast paced that people don’t
                    want to stand by reading a page of information, they would
                    much rather look at a presentation and understand the
                    message. It has come to a point where images and videos are
                    used more to
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Explore</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Android App</a>
                    </li>
                    <li>
                      <a href="#">ios App</a>
                    </li>
                    <li>
                      <a href="#">Desktop</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">My tasks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Company</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Connect</h3>
                  <div className="f_social_icon">
                    <a href="#" className="fab fa-facebook" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-linkedin" />
                    <a href="#" className="fab fa-pinterest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
