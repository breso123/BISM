/* eslint-disable react/prop-types */

import ReusableImage from "../../reusableImages/ReusableImage";

function WatchListItem({ logo, ticker }) {
  return (
    <li className="h-7 flex items-center justify-start gap-4 pl-2 mt-1 relative">
      <ReusableImage
        src={logo}
        additionalStyles="h-8 w-8 overflow-hidden shadow-watchList bg-white"
      />
      <span className="">{ticker}</span>
    </li>
  );
}

export default WatchListItem;
