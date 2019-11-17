import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing_first">Hello world</div>
        <div className="landing_search">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#profile"
                role="tab"
                data-toggle="tab"
              >
                profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#buzz" role="tab" data-toggle="tab">
                buzz
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#references"
                role="tab"
                data-toggle="tab"
              >
                references
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="profile">
              ...
            </div>
            <div role="tabpanel" class="tab-pane fade" id="buzz">
              bbb
            </div>
            <div role="tabpanel" class="tab-pane fade" id="references">
              ccc
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
