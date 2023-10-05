/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { switchSupportItem } from "../financialsSlice.js";

function ChartSelect({ item, financialsKey, supportItem }) {
  const dispatch = useDispatch();

  function itemManagement(e) {
    e.preventDefault();
    if (e.target.value === "% Growth") dispatch(switchSupportItem("G"));
    if (e.target.value === "% Margin") dispatch(switchSupportItem("M"));
    else dispatch(switchSupportItem(e.target.value));
  }

  function marginKW() {
    if (financialsKey === "income_statement") return "Revenue";
    if (financialsKey === "balance_sheet") return "Assets";
    if (financialsKey === "cash_flow") return "Total Inflows";
  }

  return (
    <select
      onChange={(e) => itemManagement(e)}
      className="w-48 h-[2rem] text-sm text-blue-900 bg-sky-100/25 border-2 border-solid border-blue-950 rounded-lg pl-1 font-semibold font-serif absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]"
      value={supportItem}
    >
      <option value="G">% Growth</option>
      <option value="M">% of {marginKW()}</option>
      {item === "tas" && <option value="roa">% ROA</option>}
      {item === "tseq" && <option value="roe">% ROE</option>}
      {item === "cptE" && <option value="roce">% ROCE</option>}
      {item === "cptT" && <option value="rotce">% ROTCE</option>}
      {item === "tngB" && <option value="rota">% ROTA</option>}
      {item === "ocfl" && <option value="ocflMg">% of Revenue</option>}
    </select>
  );
}

export default ChartSelect;
