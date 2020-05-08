import React from "react";
import {Link} from "react-router-dom";


import profileIcon from "../assets/svgs/user/user.svg"
import {IconBox, IconBoxRect} from "./buttons";
import UserProfile from "./my-profile";
const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      {/* Sidebar Menus */}
      <div className="sidebar__bottom">
        <ul className="sidebar__menu ul__list">
          {/* Tree*/}
          <li>
            <Link to={"my-forest"}>
              <IconBox text={"My Forest"}>
                <span className="icon-tree"></span>
              </IconBox>
            </Link>
          </li>
          {/* School */}
          <li>
            <Link to={"my-forest"}>
              <IconBox text={"My School"}>
                <span className="icon-school"></span>
              </IconBox>
            </Link>
          </li>
          {/* Donation */}
          <li>
            <Link to={"my-forest"}>
               <IconBox text={"My Donations"}>
                 <span className="icon-donate"></span>
               </IconBox>
            </Link>
          </li>
        </ul>
        <div className="sidebar__settings">
          <div className="">
              <IconBoxRect>
                <span className={"icon-settings"}></span>
              </IconBoxRect>
          </div>
        </div>
      </div>
      {/* end Sidebar Menus */}
    </div>
  )
}

export default Sidebar;