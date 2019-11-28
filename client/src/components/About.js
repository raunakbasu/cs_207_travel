import React, { Component } from "react";
import nyc from "../utils/img/nyc.png";
import paris from "../utils/img/paris.png";
import otawa from "../utils/img/otawa.png";
import perth from "../utils/img/perth.png";
import sf from "../utils/img/sf.jpeg";
import island from "../utils/img/island.jpeg";
import rome from "../utils/img/rome.jpeg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          {" "}
          <div className="row">
            <div className="col-md-6">
              <div className="about_link_images">
                <img src={rome} className="about_link_image1" />
                <img src={island} className="about_link_image2" />
                <img src={sf} className="about_link_image3" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_text">
                <h1 className="about_text_heading">
                  Popular <br /> Hotels Around <br /> The World
                </h1>
                <p className="about_text_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ipsum enim. Sed eu est viverra, aliquet dolor non,
                  ullamcorper mi. Donec sit amet enim at magna malesuada
                  scelerisque. Vestibulum ullamcorper nunc et mauris imperdiet
                  facilisis. Nunc vel magna et nulla suscipit iaculis. Nullam
                  magna justo, interdum quis egestas id, tincidunt sit amet
                  mauris.
                </p>
                <br />
                <div className="about_right_images_1">
                  <div
                    className="card zoom_div"
                    style={{
                      width: "12vw"
                    }}
                  >
                    <img src={otawa} className="card-img-top" alt="..." />
                  </div>
                  <div
                    className="card zoom_div"
                    style={{
                      width: "12vw"
                    }}
                  >
                    <img src={nyc} className="card-img-top" alt="..." />
                  </div>
                </div>
                <div className="about_right_images_1">
                  <div
                    className="card zoom_div"
                    style={{
                      width: "12vw "
                    }}
                  >
                    <img src={perth} className="card-img-top" alt="..." />
                  </div>
                  <div
                    className="card zoom_div"
                    style={{
                      width: "12vw"
                    }}
                  >
                    <img src={paris} className="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
