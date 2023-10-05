import ChartBackground from "./items/ChartBackground";
import LegendHL from "./items/LegendHL";
import BarEPS from "./items/BarEPS";
import ChartMargin from "./items/ChartMargin";
//import { useSelector } from "react-redux";

const dataEPS = [
  { item: "Estimated", color: ["bg-blue-600", "bg-orange-600"] },
  { item: "actual", color: ["bg-blue-900", "bg-red-700"] },
];

function Earnings() {
  //const earnings = useSelector((state) => state.general.earnings);
  const earnings = JSON.parse(localStorage.getItem("earnings"));
  const actual = earnings.map((e) => e.eps_actual);
  const estimate = earnings.map((e) => e.eps_estimate);
  const max = Math.max(...actual, ...estimate);

  return (
    <div className="w-[90%] h-[30rem] flex flex-col items-center justify-between relative mb-28">
      <LegendHL data={dataEPS} title="Earnings" />
      <ChartMargin
        margins={earnings.map((e) => e.surprise_prc / 100)}
        gap="gap-[4.5rem]"
      />

      <div className="h-[10rem] w-[80%] flex justify-between relative">
        {earnings.map((e, i) => {
          const act = e.eps_actual;
          const est = e.eps_estimate;
          const actMax = act && act === max;
          const estMax = est && est === max;

          return (
            <BarEPS
              key={i}
              per={e.date}
              est={est}
              act={act}
              hAct={{ height: actMax ? "100%" : `${(act / max) * 100}%` }}
              hEst={{ height: estMax ? "100%" : `${(est / max) * 100}%` }}
              diff={e.difference}
            />
          );
        })}
        <ChartBackground revenue={max} bn={false} />
      </div>
    </div>
  );
}

export default Earnings;
