import React from "react";

export const IconBoxRect = ({classNames,children, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`icon__box icon__box--rect ${classNames}`}>
      {children}
    </button>
  )
}

export const IconBox = ({classNames, text, children}) => {
  return (
    <React.Fragment>
      <div className={`icon__box ${classNames}`}>
        {children}
      </div>
      {
        !!text && (
          <span className="menu__text text-uppercase">{text}</span>
        )
      }
    </React.Fragment>
  )
}

export const ButtonLongBox = ({text, classNames, children}) => {
  return(
    <div className={"button__box button__box--long"}>
      { text }
    </div>
  )
}