import React, { Component } from "react";

import "./donation.scss";

class Donation extends Component{
  render() {
    return(
      <div className={"donation__card"}>
        <div className="donation__top">
          Help your school, save earth
        </div>
        <div className="donation__content">
          <h4 className={"donation__content__info"}>Donation help us do good for mother earth
            <br/>
            Can you help and get people donate for the Program
          </h4>
        </div>
        <div className="donation__actions">
          <button className="btn-reset btn-spl  btn-square-spl f-20">
            Receive Donations
          </button>
          <button className="btn-reset btn-spl btn-square-spl f-20">
            Your donation
          </button>
        </div>
      </div>
    )
  }
}

export default Donation;