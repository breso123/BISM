//import { useSelector } from "react-redux";
import { formatInterface2 } from "../../../../helpers/formatters";
import ChartBackground from "./items/ChartBackground";
import ChartDCF from "./items/ChartDCF";
import LegendHL from "./items/LegendHL";

const dataDCF = [
  { item: "Total Debt", color: "bg-purple-500" },
  { item: "Free Cash Flow", color: ["bg-lime-700", "bg-orange-700"] },
  { item: "Cash & Cash Equivalents", color: "bg-blue-800" },
];

function DebtCF() {
  //const st = useSelector((state) => state.financials.statements);
  //console.log(st);
  const st = JSON.parse(localStorage.getItem("statements"));
  const debt = st?.balance_sheet?.map((per) => per?.dbtT).slice(0, 5);
  const cash = st?.balance_sheet?.map((per) => per?.caceq).slice(0, 5);
  const ocf = st?.cash_flow?.map((per) => per?.ocfl).slice(0, 5);
  const max = Math.max(...debt, ...cash, ...ocf);

  return (
    <div className="w-[90%] h-[20rem] flex flex-col items-center justify-between relative mb-20">
      <LegendHL data={dataDCF} title="Debt & Cash Flows" />

      <div className="h-[12.5rem] w-[90%] mt-10 flex items-center justify-between relative">
        <ChartDCF debt={debt} cash={cash} ocf={ocf} max={max} />
        <ChartBackground revenue={formatInterface2(max)} />
      </div>

      <div className="flex items-end justify-evenly h-[10%] w-full gap-20 text-[0.9rem] mt-3 italic">
        <p>TTM</p>
        <p>2022</p>
        <p>2021</p>
        <p>2020</p>
        <p>2019</p>
      </div>
    </div>
  );
}

export default DebtCF;
