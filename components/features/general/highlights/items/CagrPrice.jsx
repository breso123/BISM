/* eslint-disable react/prop-types */
import { useState } from "react";

import ReusableSVG from "../../../../reusableSVG/ReusableSVG";
import CagrHead from "./CagrHead";

function CagrPrice({ priceCagr }) {
  const [cagr, setCagr] = useState(1);
  const cagrPer = priceCagr[`${cagr}Y`];
  const sdo = (1 - (cagrPer < 0 ? Math.abs(cagrPer) : cagrPer)) * 630;

  function handleChange(e) {
    e.preventDefault();
    setCagr(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-1/3 ">
      <CagrHead
        onChange={(e) => handleChange(e)}
        value={cagr}
        cagrRev={priceCagr}
        title="Return per Annum (%)"
      />
      <ReusableSVG
        percent={cagrPer}
        svgSize={300}
        strokeDashoffset={sdo}
        strokeWidth={5}
      />
    </div>
  );
}

export default CagrPrice;
