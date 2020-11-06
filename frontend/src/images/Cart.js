import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="43.241" height="37.831">
      <g
        fill="none"
        stroke={color || "#708670"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        transform="translate(-46.5 -78.5)"
      >
        <ellipse
          cx="2"
          cy="1.5"
          rx="2"
          ry="1.5"
          transform="translate(58.962 111.831)"
        ></ellipse>
        <ellipse
          cx="2"
          cy="1.5"
          rx="2"
          ry="1.5"
          transform="translate(80.962 111.831)"
        ></ellipse>
        <path d="M48 80h6.466l4.849 27.48h25.864"></path>
        <path d="M59.315 101.014h25.2a.808.808 0 00.793-.65l2.91-14.548a.808.808 0 00-.793-.967H56.082"></path>
      </g>
    </svg>
  )
}

export default Icon
