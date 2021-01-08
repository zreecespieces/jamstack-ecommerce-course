import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.138" height="14.094">
      <g opacity="0.501" transform="translate(-1066.226 -667.25)">
        <path
          fill="none"
          stroke={color || "#708670"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1076.781 668c-3.408 0-6.9 1.973-9.657 5.918a.7.7 0 00-.012.777c2.115 3.31 5.564 5.9 9.669 5.9 4.06 0 7.58-2.6 9.7-5.915a.706.706 0 000-.764c-2.125-3.28-5.671-5.916-9.7-5.916z"
        ></path>
        <circle
          cx="4"
          cy="4"
          r="4"
          fill={color || "#708670"}
          transform="translate(1072.9 670.25)"
        ></circle>
      </g>
    </svg>
  )
}

export default Icon
