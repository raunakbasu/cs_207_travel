import React, { Component } from "react";
import sf from "../utils/img/sf.jpeg";
import island from "../utils/img/island.jpeg";
import rome from "../utils/img/rome.jpeg";
import i1 from "../utils/img/i1.jpeg";
import i2 from "../utils/img/i2.jpeg";
import quote from "../utils/img/quote.webp";

class Hotel extends Component {
  render() {
    return (
      <div className="hotel">
        <div className="hotels_top lolol">
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

        <div className="hotelss">
          {" "}
          <div className="col-md-6 hotel_des">
            <ul className="hotel_des_list">
              <li className="hotel_des_list_item">
                Bedrooms <br />
                <i class="fas fa-bed" /> <span>1</span>
              </li>
              <li className="hotel_des_list_item">
                Bathrooms <br />
                <i class="fas fa-bath" /> <span>1</span>
              </li>
              <li className="hotel_des_list_item">
                Wifi <br />
                <i class="fas fa-wifi" /> <span>Yes</span>
              </li>
              <li className="hotel_des_list_item">
                Area <br />
                <i class="fas fa-ruler" /> <span>645 ft(sq.)</span>
              </li>
              <li className="hotel_des_list_item">
                Breakfast <br />
                <i class="fas fa-coffee" /> <span>Yes</span>
              </li>
            </ul>
            <br />
            <h2 className="description_head">Description:</h2>

            <p className="hotel_des_p">
              "Stay in the Heart of Lisbon. Located a 10-minute walk from the
              iconic Marques de Pombal Square and its metro station, the 4-star
              Lux Lisboa Park features a modern façade and a 24-hour reception.
              Free WiFi is available throughout the hotel. The soundproofed
              elegant rooms are tastefully decorated and feature soft tones and
              wooden floors. Each comes with air conditioning, a seating area
              and a flat-screen cable TV. Private bathrooms are open space and
              feature a shower and free toiletries. "
            </p>
            <a href="#" className="show_more">
              Show More...
            </a>
            <br />
            <br />
            <h2 className="description_head">Featured Reviews:</h2>

            <ul className="reviews_list">
              <li className="reviews_list_item">
                <img src={quote} />
                <p className="review_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <h3 className="review_name">Tanuj Sood</h3>
                <small>Student, Ashoka University</small>
              </li>
              <li className="reviews_list_item">
                <img src={quote} />
                <p className="review_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <h3 className="review_name">Tanuj Sood</h3>
                <small>Student, Ashoka University</small>
              </li>
              <li className="reviews_list_item">
                <img src={quote} />
                <p className="review_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <h3 className="review_name">Tanuj Sood</h3>
                <small>Student, Ashoka University</small>
              </li>
              <li className="reviews_list_item">
                <img src={quote} />
                <p className="review_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <h3 className="review_name">Tanuj Sood</h3>
                <small>Student, Ashoka University</small>
              </li>
              <li className="reviews_list_item">
                <img src={quote} />
                <p className="review_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />
                <h3 className="review_name">Tanuj Sood</h3>
                <small>Student, Ashoka University</small>
              </li>
              <li className="reviews_list_item">
                <button className="view_more_reviews">
                  View More Reviews..
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-4 amenities">
            <h1 className="hotel_rating">9.6</h1>
            <br />
            <h2 className="hotel_review_count">426 Reviews.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;
