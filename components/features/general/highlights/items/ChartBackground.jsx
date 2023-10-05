/* eslint-disable react/prop-types */
function ChartBackground({ revenue, bn = true }) {
  return (
    <div className="h-full w-full absolute  divide-y divide-blue-950/25">
      <div className="h-1/5 w-full relative border-t border-blue-950/25">
        <p className="text-[11px] text-blue-950 absolute top-[-10px] right-[-50px]">
          {revenue} {bn ? "Bn" : ""}
        </p>
      </div>
      <div className="h-1/5 w-full relative">
        <p className="text-[11px] text-blue-950 absolute top-[125%] right-[-50px]">
          {Math.floor(revenue / 2)} {bn ? "Bn" : ""}
        </p>
      </div>
      <div className="h-1/5 w-full relative"></div>
      <div className="h-1/5 w-full relative"></div>
      <div className="h-1/5 w-full relative"></div>
    </div>
  );
}

export default ChartBackground;
