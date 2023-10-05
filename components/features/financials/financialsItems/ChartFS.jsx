/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import ChartLower from "./ChartLower.jsx";
import ChartSelect from "./ChartSelect";
import ChartUpper from "./ChartUpper.jsx";
import { leaveChart } from "../financialsSlice.js";
import { useParams } from "react-router-dom";

function ChartFS({ statements, keywords }) {
  const { financialsKey } = useParams();
  const item = useSelector((state) => state.financials.item);
  const supportItem = useSelector((state) => state.financials.supportItem);
  const dispatch = useDispatch();
  const targetKW = item && keywords.find((kw) => kw[1] === item)[0];
  const checkerBn = ["edi", "dsou"].some((k) => item === k);
  const styleChartContainer = {
    transform: `translate(-50%, ${item !== null ? -50 : -250}%)`,
  };

  return (
    <>
      <div
        className="h-full w-full blur-[5px] bg-blue-950 absolute top-0 left-0 opacity-50 transition-all duration-300"
        style={{ display: !item ? "none" : "block" }}
      ></div>
      <div
        className="h-[40rem] w-[60rem] flex flex-col justify-between bg-sky-100 p-2 shadow-watchList rounded-lg absolute top-2/4 left-2/4 transition-all duration-300"
        style={styleChartContainer}
      >
        <div className="h-[10%] flex items-center justify-between relative px-6">
          <p className="font-serif tracking-wide font-semibold text-blue-800 text-lg drop-shadow-gridderInd">
            <span>
              {targetKW}
              <span className="text-sm italic text-indigo-950 ml-2">
                {checkerBn ? `${item === "dsou" ? "(Bn)" : ""}` : "($ Bn)"}
              </span>
            </span>
          </p>
          <ChartSelect
            item={item}
            supportItem={supportItem}
            financialsKey={financialsKey}
          />

          <button
            className="border-2 border-solid border-blue-950 rounded-lg  w-7 flex items-center justify-center"
            onClick={() => dispatch(leaveChart())}
          >
            <p>X</p>
          </button>
        </div>
        <ChartUpper
          statements={statements}
          item={item}
          financialsKey={financialsKey}
          supportItem={supportItem}
        />
        <ChartLower
          statements={statements}
          item={item}
          financialsKey={financialsKey}
        />
      </div>
    </>
  );
}

export default ChartFS;
