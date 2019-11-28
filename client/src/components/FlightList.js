import React, { Component } from "react";
import map from "../utils/img/map.png";

class FlightList extends Component {
  render() {
    return (
      <div className="flightlist">
        <div className="col-md-3 flightlist_left" />
        <div className="col-md-9 flightlist_right">
          <div className="flightlist_search">lalalalaal</div>
          <br />
          <h2 className="flight_result">RESULT (24)</h2>
          <div className="flight_details">
            <div className="flight_details_content">
              <div className="col-md-7 flight_details_content_left">
                <div className="flight_details_content_left_1">lalal</div>
                <div className="flight_details_content_left_2">iaiaia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightList;
