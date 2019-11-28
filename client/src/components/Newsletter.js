import React, { Component } from "react";
import beach from "../utils/img/beach.jpeg";

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <img src={beach} className="beach" />
        <div className="newsletter_box">
          <h2 className="newsletter_heading">Subscribe to our Newsletter</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <input
            type="submit"
            className="form-control form-control-lg text_field text-field subscribe_buttons"
            value=""
          />
          <div className="ola">
            <input
              type="text"
              className="form-control form-control-lg text_field_subscribe text-field"
              placeholder="Enter your email address"
            />
            <input
              type="submit"
              className="form-control form-control-lg text_field_subscribe_button text-field subscribe_button"
              value="Suscribe!"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
