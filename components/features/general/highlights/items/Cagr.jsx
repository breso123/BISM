/* eslint-disable react/prop-types */
import { formatPercentage } from "../../../../../helpers/formatters";

import ReusableSVG from "../../../../reusableSVG/ReusableSVG";
import CagrHead from "./CagrHead";
import { useCagr } from "./useCagr";

function Cagr({ cagr, onSetCagr, revenue, profits }) {
  const cagrRev = useCagr(revenue);
  const cagrProfit = useCagr(profits);
  const CAGRp = cagrProfit[`${cagr}Y`];
  const sdo = (1 - (CAGRp < 0 ? Math.abs(CAGRp) : CAGRp)) * 472;

  function handleChange(e) {
    e.preventDefault();
    onSetCagr(e.target.value);
  }

  return (
    <div className="h-5/6 w-[30%] ">
      <CagrHead
        onChange={(e) => handleChange(e)}
        cagr={cagr}
        cagrRev={cagrRev}
        title="CAGR (%)"
      />

      <div className="flex items-center justify-center h-[80%]">
        <ReusableSVG
          percent={CAGRp}
          strokeDashoffset={sdo}
          strokeWidth={6}
          svgSize={225}
        />
      </div>
      <div className="h-[10%] text-emerald-800 italic font-semibold">
        <p className="text-sm flex items-center justify-center">
          CAGR Revenue:
          <span className=" ml-3 text-lg text-emerald-900">
            {formatPercentage(cagrRev[`${cagr}Y`])}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Cagr;
