/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchItem } from "../features/financials/financialsSlice";

function FinChart({ keyword }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const whiteChart = ["nish", "ncfl"].some((k) => k === keyword);

  function handleClick(e) {
    e.preventDefault();
    if (!keyword) return;
    dispatch(switchItem(keyword));
  }

  return (
    <span
      className="flex items-center transition-all duration-400"
      role="button"
      onClick={(e) => handleClick(e)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={whiteChart ? "aliceblue" : "darkblue"}
        className="stroke-1 h-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <path
          style={{
            fill: isHovered
              ? `${whiteChart ? "aliceblue" : "midnightblue"}`
              : "none",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    </span>
  );
}

export default FinChart;
