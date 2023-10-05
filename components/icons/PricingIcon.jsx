/* eslint-disable react/prop-types */

function PricingIcon({ isAvailable = true }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={isAvailable ? "lightblue" : "orange"}
      className="h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={isAvailable ? "M4.5 12.75l6 6 9-13.5" : "M6 18L18 6M6 6l12 12"}
      />
    </svg>
  );
}

export default PricingIcon;
