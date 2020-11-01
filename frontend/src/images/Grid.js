import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31">
      <g
        fill="none"
        stroke={color || "#99b898"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(1.187 .85)"
      >
        <rect
          width="12"
          height="12"
          rx="6"
          transform="translate(-.187 .15)"
        ></rect>
        <rect
          width="12"
          height="12"
          rx="6"
          transform="translate(16.813 .15)"
        ></rect>
        <rect
          width="12"
          height="12"
          rx="6"
          transform="translate(-.187 17.15)"
        ></rect>
        <rect
          width="12"
          height="12"
          rx="6"
          transform="translate(16.813 17.15)"
        ></rect>
      </g>
    </svg>
  )
}

export default Icon
