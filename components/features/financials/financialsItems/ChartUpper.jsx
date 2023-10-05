//import ReusableSVG from "../../../reusableSVG/ReusableSVG";

import { useParams } from "react-router-dom";
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

/* eslint-disable react/prop-types */
function ChartUpper({ statements, item, supportItem }) {
  const { financialsKey } = useParams();
  return (
    <div className="flex items-center justify-around h-[20%]">
      {statements[financialsKey].map((p, i) => {
        const percItem = ["G", "M"].some((k) => k === supportItem)
          ? p[`${item}${supportItem}`]
          : p[supportItem];

        const checkItem100 = percItem >= 1 || percItem <= -1;
        const strokeDashoffset =
          (1 - (percItem < 0 ? Math.abs(percItem) : percItem)) * 210;

        return (
          <ReusableSVG
            percent={percItem}
            key={i}
            strokeDashoffset={checkItem100 ? 0 : strokeDashoffset}
            strokeWidth={6}
          />
        );
      })}
    </div>
  );
}

export default ChartUpper;
