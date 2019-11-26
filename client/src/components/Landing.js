import React, { Component } from "react";
import axios from "axios";
import { Calendar } from "react-date-range";
import Moment from "react-moment";
import { format, addDays } from "date-fns";
import unirest from "unirest";

class Landing extends Component {
  state = {
    from: "Delhi",
    fromFinal: "DEL-sky",
    to: "San Francisco",
    finalTo: "SFO-sky",
    fromDate: "",
    toDate: "",
    session: "",
    location: "",
    finalLocation: ""
  };

  //###########################################################
  //###########################################################
  // Flights Requets and code goes here
  //###########################################################
  //###########################################################

  onChangeFrom = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    axios({
      method: "GET",
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f251de0f98msh616a56f76aa80abp10ca81jsn82b6415d9005"
      },
      params: {
        query: this.state.from
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          fromFinal: response.data.Places[0].PlaceId
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChangeTo = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    axios({
      method: "GET",
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f251de0f98msh616a56f76aa80abp10ca81jsn82b6415d9005"
      },
      params: {
        query: this.state.to
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          finalTo: response.data.Places[0].PlaceId
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };
  formatDateDisplay = (date, defaultText) => {
    if (!date) return defaultText;
    return format(date, "yyyy-MM-dd");
  };

  handleSelectFrom = date => {
    console.log(date._d);
    this.setState({
      fromDate: this.formatDateDisplay(date._d)
    });
    console.log(this.state.fromDate);
  };

  handleSelectTo = date => {
    console.log(date._d);
    this.setState({
      toDate: this.formatDateDisplay(date._d)
    });
    console.log(this.state.toDate);
  };

  // create a session and then poll session results

  getFlights = () => {
    let y;
    var req = unirest(
      "POST",
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0"
    );

    req.headers({
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "f251de0f98msh616a56f76aa80abp10ca81jsn82b6415d9005",
      "content-type": "application/x-www-form-urlencoded"
    });

    req.form({
      inboundDate: this.state.toDate,
      cabinClass: "economy",
      children: "0",
      infants: "0",
      country: "US",
      currency: "USD",
      locale: "en-US",
      originPlace: this.state.fromFinal,
      destinationPlace: this.state.finalTo,
      outboundDate: this.state.fromDate,
      adults: "1"
    });

    req.end(res => {
      if (res.error) throw new Error(res.error);
      let x = res.headers.location;
      y = x.split("/");
      let z = y[y.length - 1];
      console.log(z);
      this.setState({
        session: y[y.length - 1]
      });
      this.getFlightsFinal(z);
    });
  };

  getFlightsFinal = session => {
    console.log("Z", session);
    axios({
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${session}?sortType=duration&sortOrder=asc&pageIndex=0&pageSize=10`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f251de0f98msh616a56f76aa80abp10ca81jsn82b6415d9005"
      },
      params: {
        pageIndex: "0",
        pageSize: "10"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //###########################################################
  //###########################################################
  // Hotels Requets and code goes here
  //###########################################################
  // ###########################################################

  onChangeLocation = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.location)
    axios({
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "FUtTTNdLztmsh6S1nSNSqa78mgO5p1xZXFMjsnsVQl6Hlw3Nvz"
      },
      params: {
        languagecode: "en-us",
        text: this.state.location
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          finalLocation: response.data[0].dest_id
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Get hotels lists
  getHotelsList = () => {
    axios({
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "FUtTTNdLztmsh6S1nSNSqa78mgO5p1xZXFMjsnsVQl6Hlw3Nvz"
      },
      params: {
        price_filter_currencycode: "USD",
        travel_purpose: "leisure",
        search_id: "none",
        order_by: "popularity",
        languagecode: "en-us",
        search_type: "city",
        offset: "0",
        dest_ids: "-2167973",
        guest_qty: "1",
        arrival_date: "2019-12-13",
        departure_date: "2019-12-17",
        room_qty: "1"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="landing">
        <div className="landing_first">Hello world</div>
        <div className="landing_search">
          <div className="col-xs-12 ">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Flights
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Trains
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Hotels
                </a>
              </div>
            </nav>
            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <ul className="bullshit_one">
                  <li className="bullshit_one_1">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="Delhi"
                      name="from"
                      onChange={this.onChangeFrom}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="To"
                      name="to"
                      onChange={this.onChangeTo}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <Calendar
                      date={this.state.fromDate}
                      onChange={this.handleSelectFrom}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <Calendar
                      date={this.state.fromDate}
                      onChange={this.handleSelectTo}
                    />
                  </li>
                  <button onClick={this.getFlights}>Submit</button>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                Et et consectetur ipsum labore excepteur est proident excepteur
                ad velit occaecat qui minim occaecat veniam. Fugiat veniam
                incididunt anim aliqua enim pariatur veniam sunt est aute sit
                dolor anim. Velit non irure adipisicing aliqua ullamco irure
                incididunt irure non esse consectetur nostrud minim non minim
                occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
                incididunt tempor dolor ipsum in qui sit. Exercitation mollit
                sit culpa nisi culpa non adipisicing reprehenderit do dolore.
                Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <ul className="">
                  <li className="">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="Location"
                      name="location"
                      onChange={this.onChangeLocation}
                    />
                  </li>

                  <button onClick={this.getHotelsList}>Find Hotels</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
