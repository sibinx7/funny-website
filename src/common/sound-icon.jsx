import React from "react";
import ButtonRectangular from "../assets/svgs/buttons/button-rect-spl.svg";

/**
 * @class
 * @name SoundIcon
 * @summary Show sound status off/on
 * @description Turn sound property on/off
 * @returns {*}
 * @constructor
 */

let soundIconStyle = {
  backgroundImage: ButtonRectangular
}
const SoundIcon = () => {
  return (
    <div>
      <div className={"sound__icon__bg"} style={soundIconStyle}>

      </div>
    </div>
  )
}

export default SoundIcon;
