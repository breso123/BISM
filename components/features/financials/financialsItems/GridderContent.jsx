/* eslint-disable react/prop-types */

import {
  formatInterface,
  formatPercentage,
  formatPi,
} from "../../../../helpers/formatters";
import { handlerCheckArray } from "../../../../keywords/kwsMiscellanious";
import { useParams } from "react-router-dom";

function GridderContent({ keyword, statements }) {
  const { financialsKey } = useParams();
  const handler = handlerCheckArray.some((kw) => kw === keyword[1])
    ? formatPercentage
    : formatInterface;

  return (
    <>
      {statements?.[financialsKey].map((fs, i) => (
        <div className="{styles.gridderValueContainer}" key={i}>
          {financialsKey === "piotroski_score" ? (
            <p>{formatPi(fs[keyword[1]])}</p>
          ) : (
            <p>{handler(fs[keyword[1]])}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default GridderContent;
