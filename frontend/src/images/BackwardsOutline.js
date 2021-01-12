import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.645 68.645">
      <g fill="none" stroke={color || "#708670"} strokeWidth="6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M33.242 47.371L20.292 34.32l12.95-13.049m-11.15 13.051h26.26"
        ></path>
        <path
          strokeMiterlimit="10"
          d="M34.322 65.645a31.322 31.322 0 1131.322-31.322 31.33 31.33 0 01-31.322 31.322z"
        ></path>
      </g>
    </svg>
  )
}

export default Icon
