import React, { Component } from "react";
import sf from "../utils/img/sf.jpeg";
import island from "../utils/img/island.jpeg";
import rome from "../utils/img/rome.jpeg";
import i1 from "../utils/img/i1.jpeg";
import i2 from "../utils/img/i2.jpeg";

class Hotel extends Component {
  render() {
    return (
      <div className="hotel">
        <div className="hotels_top">
          <div className="hotels_top_search">
            <ul className="hotels_top_search_list">
              <li className="hotels_top_search_list_item">
                <i class="fas fa-map-marker-alt" />
                <input type="text" placeholder="LISBON" />
              </li>
              <li className="hotels_top_search_list_item">
                <i class="fas fa-calendar-alt" />
                <input type="text" placeholder="2019-12-01" />
              </li>
              <li className="hotels_top_search_list_item">
                <i class="fas fa-calendar-alt" />
                <input type="text" placeholder="2019-12-10" />
              </li>
              <li className="hotels_top_search_list_item">
                <i class="fas fa-user-friends" />
                <input type="text" placeholder="2 TRAVELLERS" />
              </li>
              <li className="hotels_top_search_list_item">
                <input type="submit" value="SUBMIT" />
              </li>
            </ul>
          </div>
        </div>
        <div className="hotels_main_info">
          <h3 className="light_location">
            Lisbon<span>&#8226;</span>Portugal
          </h3>
          <h2 className="hotels_main_info_heading">
            San Francisco Mariott Union
          </h2>
          <br />
          <p className="hotels_main_info_para">
            480 Sutter St, San Francisco, CA 94108, United States
            <hr />
          </p>

          <h2 className="hotels_main_info_price">
            <span>$</span>205 /<span>3 Nights</span>
          </h2>
          <span className="notify">
            <span>&#8226;</span> Free Breakfast
          </span>
          <span className="notify">
            <span>&#8226;</span> Free Cancellation
          </span>
          <br />
          <button className="book_hotel_button now_hotel">Book Now</button>
        </div>

        <div className="container">
          <div className="wrap">
            <div className="gallery">
              <figure className="gallery__item gallery__item--1">
                <a href="#img1">
                  <img src={sf} alt="01" className="gallery__img" />
                </a>
                <div className="lightbox" id="img1">
                  <img src={sf} alt="" />
                  <a href="#_" className="btn-close">
                    &times;
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--2">
                <a href="#img2">
                  <img src={rome} alt="02" className="gallery__img" />
                </a>
                <div className="lightbox" id="img2">
                  <img src={rome} alt="" />
                  <a href="#_" className="btn-close">
                    &times;
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--3">
                <a href="#img3">
                  <img src={i2} alt="03" className="gallery__img" />
                </a>
                <div className="lightbox" id="img3">
                  <img src={i2} alt="" />
                  <a href="#_" className="btn-close">
                    &times;
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--4">
                <a href="#img4">
                  <img src={i1} alt="04" className="gallery__img" />
                </a>
                <div className="lightbox" id="img4">
                  <img src={i1} alt="" />
                  <a href="#_" className="btn-close">
                    &times;
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;
