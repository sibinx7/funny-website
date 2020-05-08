import React, { Component } from "react";
import Donation from "../components/donation";

import ChapterData from "../data/card-data.json";
import Chapter from "../components/chapter";


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';

import "./index.scss"
import ChapterList from "../components/chapter-list";


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

          <ChapterList/>
        </div>
        {/*<div className="donation__intro">*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default HomeIndex;