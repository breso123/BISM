/* eslint-disable react/prop-types */
import { formatPercentage } from "../../../../helpers/formatters";

function ReturnItem({ open, close }) {
  const rtrn = close / open - 1;
  return (
    <p className={`text-${rtrn > 0 ? "blue" : "orange"}-800`}>
      {formatPercentage(rtrn)}
    </p>
  );
}

export default ReturnItem;
