import {
  popularStocks,
  watchList,
} from "../../../miscellanious/sidebarTestItems";
import WatchListType from "./WatchListType";

function Watchlists() {
  return (
    <div className=" grid grid-cols-1 text-center py-4 px-2 h-full">
      <div className="flex flex-col h-1/2">
        <p className="text-md h-10 mb-3 border-l-2 border-r-2 rounded-full p-2 border-blue-900 text-blue-900 hover:shadow-buttons hover:cursor-pointer hover:font-semibold transition-all duration-200">
          My Watchlist
        </p>
        <WatchListType watchArr={watchList} />
      </div>
      <div className="flex flex-col h-1/2">
        <p className="text-md h-10 mb-6 border-l-2 border-r-2 rounded-full p-2 border-blue-900 text-blue-900 hover:shadow-buttons hover:cursor-pointer hover:font-semibold transition-all duration-200">
          Popular Stocks
        </p>
        <WatchListType watchArr={popularStocks} />
      </div>
    </div>
  );
}

export default Watchlists;
