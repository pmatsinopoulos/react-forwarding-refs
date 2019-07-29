import React from 'react'
import logProps from "./logProps";

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>)
})

export default logProps(FancyButton)
