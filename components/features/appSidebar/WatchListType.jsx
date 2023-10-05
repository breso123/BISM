/* eslint-disable react/prop-types */
import WatchListItem from "./WatchListItem";

function WatchListType({ watchArr }) {
  return (
    <ul className="flex flex-col gap-2 ">
      {watchArr.map((w, i) => (
        <WatchListItem logo={w.logo} ticker={w.ticker} key={i} />
      ))}
    </ul>
  );
}

export default WatchListType;
