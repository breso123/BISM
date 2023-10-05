/* eslint-disable react/prop-types */
import FinChart from "../../../icons/FinChart";

function ROVHeader({ onClick }) {
  return (
    <div className=" flex items-center justify-center w-full px-10 py-2 rounded-full shadow-buttons">
      <p className="flex items-center w-2/3 gap-10">
        <span className="w-1/3 text-blue-900 font-semibold font-sans">
          Return (%)
        </span>
        <button onClick={onClick}>
          <FinChart />
        </button>
      </p>
      <div className="grid grid-cols-4 items-center w-[80%] text-[0.85rem] text-blue-950">
        <p>Q1</p>
        <p>Q2</p>
        <p>Q3</p>
        <p>Q4</p>
      </div>
      <p className="text-[0.9rem] font-semibold w-[20%] ml-8">Full Year</p>
    </div>
  );
}

export default ROVHeader;
