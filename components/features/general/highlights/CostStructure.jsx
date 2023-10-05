/* eslint-disable react/prop-types */
import CostDonut from "./items/CostDonut";
import LegendHL from "./items/LegendHL";
import { useCostStructure } from "./items/useCostStructure";

const dataCosts = [
  { item: "Cost of Sales", color: "bg-lime-600" },
  { item: "R&D", color: "bg-emerald-500" },
  { item: "SG&A", color: "bg-sky-700" },
  { item: "Interest", color: "bg-blue-950" },
  { item: "Other", color: "bg-violet-600" },
];

function CostStructure() {
  const expenses = useCostStructure();

  return (
    <div className="w-[90%] h-[10rem] flex flex-col items-center justify-between relative mb-40">
      <LegendHL data={dataCosts} title="Cost Structure" />
      <div className="w-full h-[30rem] flex items-center justify-between">
        {expenses?.map((exp, i) => (
          <CostDonut
            period={["TTM", "2022", "2021", "2020"][i]}
            costs={exp}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default CostStructure;
