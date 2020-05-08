import React, { Component } from "react";
import Donation from "../components/donation";

import ChapterData from "../data/card-data.json";
import Chapter from "../components/chapter";

import "./index.scss"

class HomeIndex extends Component{
  render() {
    return (
      <div className={"home__index page__top"}>
        <div className="container-fluid">
          {/* First Section */}
          <div className="page__section section__one mb-30">
            <div className="donation__intro">
              <div className="intro__grid px-15">
                <div className={`intro`}>
                  <h5 className={"text-orange fs-25"}>You reached Chapter 2</h5>
                  <h3 className={"text-green fs-35"}>The Forest is growing</h3>
                  <p className={"fs-23 text-dark"}>Your forest is growing back. Complete more chapters and make it complete</p>
                </div>
              </div>
              <div className="donation__grid px-15">
                <div className="donation">
                  <Donation/>
                </div>
              </div>
            </div>
          </div>
          {/* end First Section */}

          {/* Card Section */}
          <div className="chapters__list">
            {
              ChapterData.map((data, index) => {
                return <div className={"chapter__item"} key={data.id || index}>
                  <Chapter data={data} key={data.id || index}/>
                </div>
              })
            }
          </div>
          {/* end Card Section */}
        </div>
        {/*<div className="donation__intro">*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default HomeIndex;