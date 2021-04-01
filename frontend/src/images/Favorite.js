import React from "react"

function Icon({ color, filled }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209.13 195.048">
      <path
        fill={!filled ? "none" : color || "#fff"}
        stroke={color || "#fff"}
        strokeLinejoin="round"
        strokeWidth="12"
        d="M203.13 76.4h-75.684L104.565 6 81.684 76.4H6l61.6 42.242-23.761 70.4 60.723-44 60.723 44-23.761-70.4z"
      ></path>
    </svg>
  )
}

export default Icon
