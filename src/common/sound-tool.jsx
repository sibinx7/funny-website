import React, { Component } from "react";
import {IconBoxRect} from "./buttons";


import "./sound-tool.scss"

class SoundTool extends Component{

  state = {
    mute: false
  }

  handleClick = (e) =>{
    if(e){
      e.preventDefault()
    }
    const { mute } = this.state;
    this.setState({mute: !mute})
  }

  render() {

    const { mute } = this.state;
    let muteClass = mute ? "icon-speaker-off": "icon-speaker-on";

    return (
      <IconBoxRect classNames={"sound__tool"} onClick={ this.handleClick}>
        <span className={ muteClass }></span>
      </IconBoxRect>
    )
  }
}

export default SoundTool;