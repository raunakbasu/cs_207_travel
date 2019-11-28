import React, { Component } from "react";
import i1 from "../utils/img/i1.jpeg";
import sf from "../utils/img/sf.jpeg";
import next from "../utils/img/next.webp";

class HotelsList extends Component {
  state = {
    value: {
      min: 2,
      max: 10
    }
  };
  render() {
    return (
      <div className="hotellist">
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
        <div className="hotellist_main">
          <div className="col-md-3 hotellist_left">
            <ul className="hotellist_left_list">
              <li className="hotellist_left_list_item">
                <input type="text" placeholder="Search" />
                <i class="fas fa-search" />
              </li>
              <li className="hotellist_left_list_item recom">
                Sort:{" "}
                <span className="light">
                  Recommended <span>&#10515;</span>
                </span>
              </li>
              <li className="hotellist_left_list_item">
                <h6 className="hotellist_left_subheading">Frequently Used:</h6>
                <br />
                <div className="frequent">
                  <span>Hotel</span>
                  <span>Hostels</span>
                  <span>Wi-Fi</span>
                  <br />
                  <span>Double Bed</span>
                  <span>Apartments</span>
                </div>
              </li>

              <li className="hotellist_left_list_item recom">
                <a href="#" className="main_btn more_button">
                  See more options
                  <img src={next} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-9 hotellist_right">
            <h2 className="hotel_result">Lisbon: 209 properties found.</h2>
            <br />
            <ul className="col-md-9 hotellist_right_list list-group">
              <li className="col-md-9 hotellist_right_list_item">
                <div
                  className="card mb-3"
                  style={{
                    width: "65vw",
                    border: "none"
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={sf} className="card-img hotel_card" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body hotel_card_body">
                        <span>HOTEL</span>
                        <span className="hotel_price">
                          <span className="dollar">$</span>205 <br />
                        </span>
                        <span className="green_quote">Save 20%</span>
                        <span className="book_hotel_button">Book Now</span>
                        <h5 className="card-title">
                          San Francisco Mariott Union
                        </h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <i className="far fa-star star_reviews" />
                            488 Reviews
                            <br />
                            <i className="fas fa-map-marker-alt star_reviews" />
                            1.2 KM from the center.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-md-9 hotellist_right_list_item">
                <div
                  className="card mb-3"
                  style={{
                    width: "65vw",
                    border: "none"
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={i1} className="card-img hotel_card" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body hotel_card_body">
                        <span>HOSTEL</span>
                        <span className="hotel_price">
                          <span className="dollar">$</span>185 <br />
                        </span>
                        <span className="green_quote">Save 10%</span>
                        <span className="book_hotel_button">Book Now</span>
                        <h5 className="card-title">Nyon Hostel</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <i className="far fa-star star_reviews" />
                            488 Reviews
                            <br />
                            <i className="fas fa-map-marker-alt star_reviews" />
                            1.2 KM from the center.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-md-9 hotellist_right_list_item">
                <div
                  className="card mb-3"
                  style={{
                    width: "65vw",
                    border: "none"
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={sf} className="card-img hotel_card" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body hotel_card_body">
                        <span>HOTEL</span>
                        <span className="hotel_price">
                          <span className="dollar">$</span>205 <br />
                        </span>
                        <span className="green_quote">Save 20%</span>
                        <span className="book_hotel_button">Book Now</span>
                        <h5 className="card-title">
                          San Francisco Mariott Union
                        </h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <i className="far fa-star star_reviews" />
                            488 Reviews
                            <br />
                            <i className="fas fa-map-marker-alt star_reviews" />
                            1.2 KM from the center.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-md-9 hotellist_right_list_item">
                <div
                  className="card mb-3"
                  style={{
                    width: "65vw",
                    border: "none"
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={sf} className="card-img hotel_card" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body hotel_card_body">
                        <span>HOTEL</span>
                        <span className="hotel_price">
                          <span className="dollar">$</span>205 <br />
                        </span>
                        <span className="green_quote">Save 20%</span>
                        <span className="book_hotel_button">Book Now</span>
                        <h5 className="card-title">
                          San Francisco Mariott Union
                        </h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <i className="far fa-star star_reviews" />
                            488 Reviews
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default HotelsList;
