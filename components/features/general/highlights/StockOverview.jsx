function StockOverview() {
  return (
    <div className="w-[90%] h-[30rem] relative mb-20">
      <div className="w-full h-[12rem] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] divide-x divide-blue-950 grid grid-cols-2">
        <div className="flex flex-col items-center justify-center justify-self-end mr-6">
          <div className="flex items-center justify-center gap-2">
            <span
              style={{ textShadow: "1px 1px 10px rgba(25, 25, 112, 0.3)" }}
              className="text-7xl text-stone-800"
            >
              170.43
            </span>
            <div className="flex flex-col items-start justify-start">
              <span className=" text-2xl text-blue-950 italic">USD</span>
              <span className=" text-center text-md text-red-800 tracking-wider">
                (0.89 %)
              </span>
            </div>
          </div>
          <p className="italic text-stone-600">
            Last update at Sep 27, 16:10 EDT
          </p>
        </div>
        <div className="flex flex-col items-start justify-center justify-self-start pl-6">
          <p className="text-blue-900 italic text-sm ml-1">Post-Market</p>
          <div className="flex items-center justify-center gap-2">
            <span
              style={{ textShadow: "1px 1px 10px rgba(25, 25, 112, 0.3)" }}
              className="text-4xl text-stone-800"
            >
              173.25
            </span>
            <div className="flex flex-col items-start justify-start">
              <span className=" text-xs text-blue-950 italic">USD</span>
              <span className=" text-center text-xs text-green-900 tracking-wider">
                +2.35 %
              </span>
            </div>
          </div>
          <p className="italic text-stone-600 text-xs">
            Last update at Sep 27, 16:10 EDT
          </p>
        </div>
      </div>
      <div className="h-[30rem] w-full  flex flex-col items-center justify-center  font-semibold">
        <div className="w-full h-full flex items-start justify-between text-blue-800 text-sm">
          <p className="  flex items-center flex-col gap-2 mt-24">
            <span>Market Capitalization</span>
            <span
              style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
              className="text-4xl text-blue-900"
            >
              2.65 T
            </span>
          </p>
          <p className="  flex items-center flex-col gap-2">
            <span>Revenue</span>
            <span
              style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
              className="text-4xl text-blue-900"
            >
              392 Bn
            </span>
          </p>
          <p className="  flex items-center flex-col gap-2">
            <span>Number of Shares</span>
            <span
              style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
              className="text-4xl text-blue-900"
            >
              16.5 Bn
            </span>
          </p>
          <p className="  flex items-center flex-col gap-2 mt-24">
            <span>Volume 10D</span>
            <span
              style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
              className="text-4xl text-blue-900"
            >
              25 Mn
            </span>
          </p>
        </div>
        <div className="w-full h-full flex items-end justify-between text-sky-700 text-sm italic">
          <p className="  flex items-center flex-col gap-2 mb-24">
            <span
              style={{ textShadow: "2px 2px 5px rgba(0, 83, 135, 0.5)" }}
              className="text-4xl text-sky-800"
            >
              2.35 %
            </span>
            <span>Dividend Yield</span>
          </p>
          <p className="  flex items-center flex-col gap-2">
            <span
              style={{ textShadow: "2px 2px 5px rgba(0, 83, 135, 0.5)" }}
              className="text-4xl text-sky-800"
            >
              26.4 %
            </span>
            <span>Profit Margin</span>
          </p>
          <p className="  flex items-center flex-col gap-2">
            <span
              style={{ textShadow: "2px 2px 5px rgba(0, 83, 135, 0.5)" }}
              className="text-4xl text-sky-800"
            >
              27.3 x
            </span>
            <span>Trailing P/E</span>
          </p>
          <p className="  flex items-center flex-col gap-2 mb-24">
            <span
              style={{ textShadow: "2px 2px 5px rgba(0, 83, 135, 0.5)" }}
              className="text-4xl text-sky-800"
            >
              1.22
            </span>
            <span>Beta</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockOverview;
