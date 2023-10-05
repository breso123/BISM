import { useState } from "react";
import ChartMargin from "./items/ChartMargin";
import ChartRP from "./items/ChartRP";
import Cagr from "./items/Cagr";
import ProfitBtns from "./items/ProfitBtns";

const kwsRP = [
  ["gross", "gpr", "gprM"],
  ["ebitda", "eb", "ebM"],
  ["operating", "oin", "oinM"],
  ["pre-tax", "pin", "pinM"],
  ["net", "nin", "ninM"],
];

function RevenueProfit() {
  const [profit, setProfit] = useState("gpr");
  const [margin, setMargin] = useState("gprM");
  const [cagr, setCagr] = useState(1);

  const st = JSON.parse(localStorage.getItem("statements"));
  const revenue = st?.income_statement.map((per) => per.sa).slice(0, 5);
  const profits = st?.income_statement.map((per) => per[profit]).slice(0, 5);
  const margins = st?.income_statement.map((per) => per[margin]).slice(0, 5);

  function handleClick(e) {
    e.preventDefault();
    const tgt = e.target.textContent.toLowerCase();
    const tgtKW = kwsRP.find((kw) => kw[0] === tgt);
    setProfit(tgtKW[1]);
    setMargin(tgtKW[2]);
  }

  return (
    <div className="w-[90%] h-[20rem] flex flex-col items-center justify-between mb-20">
      <ProfitBtns onClick={(e) => handleClick(e)} />
      <div className="w-full h-[30rem] flex items-center justify-between">
        <div className="h-5/6 w-[60%]  flex flex-col items-center justify-between">
          <ChartMargin margins={margins} />
          <ChartRP
            revenue={revenue}
            profits={profits}
            item={kwsRP.find((kw) => kw[1] === profit)[0]}
          />
          <div className="flex items-end justify-center h-[10%] gap-20 text-xs italic">
            <p>TTM</p>
            <p>2022</p>
            <p>2021</p>
            <p>2020</p>
            <p>2019</p>
          </div>
        </div>
        <Cagr
          cagr={cagr}
          onSetCagr={setCagr}
          revenue={revenue}
          profits={profits}
        />
      </div>
    </div>
  );
}

export default RevenueProfit;
