import React from "react"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172">
      <g transform="translate(-42 -42)">
        <rect
          width="160"
          height="148"
          fill="none"
          stroke={color || "#fff"}
          strokeLinejoin="round"
          strokeWidth="12"
          rx="24"
          transform="translate(48 60)"
        ></rect>
        <path
          fill={color || "#fff"}
          d="M182.519 60.305H73.449A25.678 25.678 0 0048 86.146v23.38h6.153c0-6.153 6.153-12.305 12.305-12.305H189.51c6.153 0 12.305 6.153 12.305 12.305h6.153v-23.38a25.678 25.678 0 00-25.449-25.841z"
        ></path>
        <ellipse
          cx="9.5"
          cy="9"
          fill={color || "#fff"}
          rx="9.5"
          ry="9"
          transform="translate(134 110)"
        ></ellipse>
        <circle
          cx="9"
          cy="9"
          r="9"
          fill={color || "#fff"}
          transform="translate(165 110)"
        ></circle>
        <circle
          cx="9.5"
          cy="9.5"
          r="9.5"
          fill={color || "#fff"}
          transform="translate(134 140)"
        ></circle>
        <ellipse
          cx="10"
          cy="9.5"
          fill={color || "#fff"}
          rx="10"
          ry="9.5"
          transform="translate(165 140)"
        ></ellipse>
        <ellipse
          cx="10"
          cy="9.5"
          fill={color || "#fff"}
          rx="10"
          ry="9.5"
          transform="translate(71 140)"
        ></ellipse>
        <circle
          cx="9.5"
          cy="9.5"
          r="9.5"
          fill={color || "#fff"}
          transform="translate(103 140)"
        ></circle>
        <ellipse
          cx="10"
          cy="9.5"
          fill={color || "#fff"}
          rx="10"
          ry="9.5"
          transform="translate(71 171)"
        ></ellipse>
        <circle
          cx="9.5"
          cy="9.5"
          r="9.5"
          fill={color || "#fff"}
          transform="translate(103 171)"
        ></circle>
        <circle
          cx="9.5"
          cy="9.5"
          r="9.5"
          fill={color || "#fff"}
          transform="translate(134 171)"
        ></circle>
        <path
          fill="none"
          stroke={color || "#fff"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
          d="M79 48v12m98-12v12"
        ></path>
      </g>
    </svg>
  )
}

export default Icon
