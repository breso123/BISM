/* eslint-disable react/prop-types */
import ReusableSVG from "../../../../reusableSVG/ReusableSVG";

function ChartMargin({ margins, gap = "gap-4" }) {
  return (
    <div className={`flex items-center justify-center ${gap} h-[20%] mb-8`}>
      {margins?.map((m, i) => {
        const sd = (1 - (m < 0 ? Math.abs(m) : m)) * 180;
        return (
          <ReusableSVG
            percent={m}
            svgSize={90}
            strokeDashoffset={sd}
            strokeWidth={5}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default ChartMargin;
