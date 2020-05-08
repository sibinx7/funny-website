import React, { Component, Fragment } from "react";
import {IconBoxRect} from "./buttons";
import {PointCec, PointDefault} from "./points";

import "./header.scss"
import SoundTool from "./sound-tool";
import UserProfile from "./my-profile";

class Header extends Component{
  render() {
    return(
      <Fragment>
        <header className={"header"}>
          {/* User Profile Section */}
          <div className="header__profile header__left">
            <UserProfile/>
          </div>
          {/* end User Profile Section */}

          <div className="header__right">
            {/* Point Section */}
            <ul className="header__menu ul__list">
              <li>
                <PointCec label={"CEC Point"}
                          points={3000}
                          type={"cec"}/>
              </li>
              <li>
                <PointDefault label={"My Points"} points={12}/>
              </li>
            </ul>
            {/* end Point Section */}

            {/* Sound on/off section */}
            <ul className="header__tools ul__list">
              <li>
                <SoundTool/>
              </li>
            </ul>
            {/* end Sound on/off section */}
          </div>

        </header>
      </Fragment>
    )
  }
}

export default Header;