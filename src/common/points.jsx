import React from "react";
import "./points.scss";

import CECSVGImage from "../assets/images/cec.svg";

/**
 * @todo Only one point component required, props can be use to make different
 */

/**
 *
 * @class
 * @name PointDefault
 * @param label
 * @param points
 * @param children
 * @returns {*}
 * @constructor
 */
export const PointDefault = ({label, points,children}) => {
  return (
    <div className={"point point--default"}>
      <span className={'label'}>{label}</span>
      <span className="divider">:</span>
      <span className={'number'}>{points}&nbsp;pts</span>
    </div>
  )
}

/**
 *
 * @class
 * @name PointCec
 * @param label
 * @param points
 * @param children
 * @returns {*}
 * @constructor
 */
export const PointCec = ({label, points, children}) => {
  return (
    <div className={"point point--cec"}>
      <div className="icon__content">
        <div className="icon">
        <span className={"icon-ellipse"}>
          <img src={CECSVGImage} alt="CEC point element"/>
        </span>
        </div>
        <div className={"content"}>
          <span className={'label'}>{label}</span>
          <span className="divider">:</span>
          <span className={'number'}>{points}&nbsp;pts</span>
        </div>
      </div>
    </div>
  )
}