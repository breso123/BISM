/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import ReusableImage from "../../../reusableImages/ReusableImage";
import { switchChartType } from "../generalSlice";

function StockChartController() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center w-96 h-14 gap-4 absolute top-[-24%] left-[50%] translate-x-[-50%] bg-sky-100/50 rounded-full shadow-priceBox pl-4">
      <button className="flex items-center gap-2 w-[70%] group">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="midnightblue"
            className="w-5 h-5 group-hover:h-6 group-hover:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </span>
        <span className="text-[0.95rem] text-blue-950 font-mono group-hover:italic group-hover:font-semibold">
          Technical Analysis
        </span>
      </button>
      <div className="flex items-center gap-4 w-[30%]">
        <button
          onClick={() => dispatch(switchChartType("candle"))}
          className="shadow-watchList rounded-lg"
        >
          <ReusableImage
            additionalStyles="h-9 w-9 hover:h-10 hover:w-10 transition-all duration-300"
            src="https://cdn-icons-png.flaticon.com/512/6353/6353961.png"
          />
        </button>
        <button
          onClick={() => dispatch(switchChartType("area"))}
          className="shadow-watchList rounded-lg"
        >
          <ReusableImage
            additionalStyles="h-9 w-9 hover:h-10 hover:w-10 transition-all duration-300"
            src="https://cdn.icon-icons.com/icons2/2911/PNG/512/area_chart_icon_183308.png"
          />
        </button>
      </div>
    </div>
  );
}

export default StockChartController;
