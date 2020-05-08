import React, {Component, Fragment} from "react"
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import ChapterData from "../data/card-data.json";
import Chapter from "./chapter";

import "./chapter-list.scss";

let breakPointSliderItems = {
  lg: 3,
  md: 3,
  sm: 2,
  smx: 2,
  xs: 1
}

class ChapterList extends Component {

  state = {
    responsive_width: 0,
    breakpoint: "lg"
  }

  componentDidMount() {
    this.checkResponsiveAndSetSlider();
    this.calculateResponsive();
  }

  checkResponsiveAndSetSlider = () => {
    window.addEventListener("resize", () => {
      this.calculateResponsive();
    });
  }

  calculateResponsive = () => {
    let screenWidth = window.outerWidth; // document, or device width can be use
    let breakpoint;
    // debugger
    switch (true) {
      case (1200 <= screenWidth):
        breakpoint = "lg";
        break;
      case ((1200 > screenWidth)  && ( screenWidth >= 992)):
        breakpoint = "md";
        break;
      case ((992 > screenWidth) && (screenWidth >= 576)):
        breakpoint = "sm";
        break;
      case (576 > screenWidth):
        breakpoint = "xs";
        break;
      default:
        breakpoint = "lg"
        break;
    }
    console.log(screenWidth)
    console.log(">>>>", breakpoint)
    this.setState({breakpoint});
  }

  componentWillUnmount() {
    window.removeEventListener("resize")
  }


  render() {
    const { breakpoint } = this.state;
    let sliderItems = 3;
    try{
      sliderItems = breakPointSliderItems[breakpoint];
    }catch (e) {

    }

    console.log(breakpoint)
    console.log(sliderItems)
    console.log("***")


    return (
      <Fragment>
        {/* Card Section */}
        <div className="chapters__list" slider-item={sliderItems}>
          <CarouselProvider
            naturalSlideHeight={394}
            naturalSlideWidth={291}
            visibleSlides={sliderItems}
            totalSlides={ 3 }>
            <Slider>
              {
                ChapterData.map((data, index) => {
                  return <Slide index={index} key={index}>
                    <div className={"chapter__item"} key={data.id || index}>
                      <Chapter data={data} key={data.id || index}/>
                    </div>
                  </Slide>
                })
              }
            </Slider>
            {
              sliderItems < 3 && (
                <div className="chapter__navigation">
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
                </div>
              )
            }

          </CarouselProvider>

        </div>
        {/* end Card Section */}
      </Fragment>
    )
  }
}

export default ChapterList;