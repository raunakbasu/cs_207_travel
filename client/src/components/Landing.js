import React, { Component } from "react";
import axios from "axios";

class Landing extends Component {
  state = {
    from: "",
    fromFinal: ""
  };

  onChange = event => {
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
                      placeholder="From"
                      name="from"
                      onChange={this.onChange}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="To"
                      name="to"
                      onChange={this.onChange}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="From"
                      name="from"
                      onChange={this.onChange}
                    />
                  </li>
                  <li className="bullshit_one_1">
                    <input
                      className="form-control form-control-lg text-field"
                      placeholder="From"
                      name="from"
                      onChange={this.onChange}
                    />
                  </li>
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
                id="nav-about"
                role="tabpanel"
                aria-labelledby="nav-about-tab"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;