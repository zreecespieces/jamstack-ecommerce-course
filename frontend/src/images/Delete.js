import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 42">
      <g stroke={color || "#fff"} strokeLinecap="round" strokeWidth="3">
        <path
          fill="none"
          strokeLinejoin="round"
          d="M4.579 7.5l1.875 30a3.012 3.012 0 003 3h17.25a3.018 3.018 0 003-3l1.875-30"
        ></path>
        <path strokeMiterlimit="10" d="M1.5 7.5h33"></path>
        <path
          fill="none"
          strokeLinejoin="round"
          d="M12.079 7.5V3.75h0a2.243 2.243 0 012.25-2.25h7.5a2.243 2.243 0 012.25 2.25h0V7.5m-5.579 6v21m-7-21l1 21m12-21v21"
        ></path>
      </g>
    </svg>
  )
}

export default Icon
