import React, { Component } from "react";
import map from "../utils/img/map.png";
import plane from "../utils/img/flight.png";
import next from "../utils/img/next.webp";

class FlightList extends Component {
  render() {
    return (
      <div className="flightlist">
        <div className="hotels_top flights_top">
          <div className="hotels_top_search flights_top_search">
            <ul className="hotels_top_search_list flights_top_search_list ">
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <i class="fas fa-map-marker-alt" />
                <input type="text" placeholder="DELHI" />
              </li>
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <i class="fas fa-map-marker-alt" />
                <input type="text" placeholder="LISBON" />
              </li>
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <i class="fas fa-calendar-alt" />
                <input type="text" placeholder="2019-12-01" />
              </li>
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <i class="fas fa-calendar-alt" />
                <input type="text" placeholder="2019-12-10" />
              </li>
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <i class="fas fa-user-friends" />
                <input type="text" placeholder="2 TRAVELLERS" />
              </li>
              <li className="hotels_top_search_list_item flights_top_search_list_item">
                <input type="submit" value="SUBMIT" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flights_main">
          <div className="col-md-3 hotellist_left flightlist_left">
            <ul className="hotellist_left_list flight_leftt">
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
              <li className="hotellist_left_list_item stops">
                No of stops: <br />
                <div className="stop_span">
                  {" "}
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3+</span>
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
          <div className="col-md-7 flightlist_right hotellist_right">
            <div className="flightlist_right_main">
              <ul className="flightlist_right_top_list">
                <li className="flightlist_right_top_list_item">
                  <small>Departure</small>
                  <br />
                  <br />
                  <h2 className="flightlist_right_top_list_item_h2">
                    New Delhi
                  </h2>
                  <small>DEL-sky</small>
                </li>
                <li className="flightlist_right_top_list_item">
                  <img src={plane} className="plane" />
                </li>
                <li className="flightlist_right_top_list_item">
                  <small>Arrival</small>
                  <br />
                  <br />
                  <h2 className="flightlist_right_top_list_item_h2">
                    San Francisco
                  </h2>
                  <small>SFO-sky</small>
                </li>

                <li className="flightlist_right_top_list_item">
                  <small>Depart</small>
                  <br />
                  <br />

                  <small>
                    <i class="fas fa-calendar-alt" />
                    2019-12-01
                  </small>
                </li>
                <li className="flightlist_right_top_list_item">
                  <small>Arrive</small>
                  <br />
                  <br />
                  <small>
                    <i class="fas fa-calendar-alt" /> 2019-12-10
                  </small>
                </li>
              </ul>
            </div>
            <ul className="flightlist_right_list">
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">16:15</h3>
                <br />
                <small>Departure</small>
              </li>
              <li className="flightlist_right_list_item">
                <span>&#8226;&#8226;&#8226;</span>

                <small className="stop">0 Stops</small>
                <span>&#8226;&#8226;&#8226;</span>
                <br />
                <br />
                <small>5 hours 35 mins</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">21:44</h3>
                <br />
                <small>Arrival</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$140</h3>
                <br />
                <small>Economy from</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$450</h3>
                <br />
                <small>Business from</small>
              </li>
              <li className="flightlist_right_list_item">
                <button>Details</button>
                <br />
                <br />
              </li>
              <li className="flightlist_right_list_item ">
                <button className="ll">Book Now</button>
                <br />
                <br />
              </li>
            </ul>
            <hr />
            <ul className="flightlist_right_list">
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">16:15</h3>
                <br />
                <small>Departure</small>
              </li>
              <li className="flightlist_right_list_item">
                <span>&#8226;&#8226;&#8226;</span>

                <small className="stop">0 Stops</small>
                <span>&#8226;&#8226;&#8226;</span>
                <br />
                <br />
                <small>5 hours 35 mins</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">21:44</h3>
                <br />
                <small>Arrival</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$140</h3>
                <br />
                <small>Economy from</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$450</h3>
                <br />
                <small>Business from</small>
              </li>
              <li className="flightlist_right_list_item">
                <button>Details</button>
                <br />
                <br />
              </li>
              <li className="flightlist_right_list_item ">
                <button className="ll">Book Now</button>
                <br />
                <br />
              </li>
            </ul>
            <hr />
            <ul className="flightlist_right_list">
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">16:15</h3>
                <br />
                <small>Departure</small>
              </li>
              <li className="flightlist_right_list_item">
                <span>&#8226;&#8226;&#8226;</span>

                <small className="stop">0 Stops</small>
                <span>&#8226;&#8226;&#8226;</span>
                <br />
                <br />
                <small>5 hours 35 mins</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">21:44</h3>
                <br />
                <small>Arrival</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$140</h3>
                <br />
                <small>Economy from</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$450</h3>
                <br />
                <small>Business from</small>
              </li>
              <li className="flightlist_right_list_item">
                <button>Details</button>
                <br />
                <br />
              </li>
              <li className="flightlist_right_list_item ">
                <button className="ll">Book Now</button>
                <br />
                <br />
              </li>
            </ul>
            <hr />
            <ul className="flightlist_right_list">
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">16:15</h3>
                <br />
                <small>Departure</small>
              </li>
              <li className="flightlist_right_list_item">
                <span>&#8226;&#8226;&#8226;</span>

                <small className="stop">0 Stops</small>
                <span>&#8226;&#8226;&#8226;</span>
                <br />
                <br />
                <small>5 hours 35 mins</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">21:44</h3>
                <br />
                <small>Arrival</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$140</h3>
                <br />
                <small>Economy from</small>
              </li>
              <li className="flightlist_right_list_item">
                <h3 className="flightlist_right_list_item_h3">$450</h3>
                <br />
                <small>Business from</small>
              </li>
              <li className="flightlist_right_list_item">
                <button>Details</button>
                <br />
                <br />
              </li>
              <li className="flightlist_right_list_item ">
                <button className="ll">Book Now</button>
                <br />
                <br />
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default FlightList;
