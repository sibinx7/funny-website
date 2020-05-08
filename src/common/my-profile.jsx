import React, { Component, Fragment, lazy, Suspense } from "react";
import profileIcon from "../assets/svgs/user/user.svg";
import {Link} from "react-router-dom";

class UserProfile extends Component{

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return(
      <Fragment>
        {/* User icon */}
        <Link to={"profile"} className={"rounded-circle user__profile text-d-none"}>
          <img src={profileIcon} alt="User profile section" className={"rounded-circle"}/>
        </Link>
        {/* end User icon */}
        {/* User dropdown */}

        {/* end User dropdown */}
      </Fragment>
    )
  }
}

// Props information

export default UserProfile;