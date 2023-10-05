function StockPerformance() {
  return (
    <div className="w-[90%] h-[20rem] flex flex-col items-center justify-between text-center">
      <div
        style={{ boxShadow: "1px 1px 1px midnightblue" }}
        className="h-[12%] w-full flex items-center justify-between px-2 border-b border-blue-950 rounded-lg"
      >
        <p className="italic text-blue-900">Stock Performance (%)</p>
        <div className="grid grid-cols-8 gap-6 italic font-semibold text-blue-900/75">
          <p>YTD</p>
          <p>1D</p>
          <p>5D</p>
          <p>1M</p>
          <p>6M</p>
          <p>1Y</p>
          <p>3Y</p>
          <p>5Y</p>
        </div>
      </div>
      <div className="h-[88%] w-full flex flex-col items-start justify-start mb-20">
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Stock Price
          </p>
          <div className="grid grid-cols-8 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="text-red-900/80">-11.5</p>
            <p className="text-red-900/80">-0.9</p>
            <p className="text-green-800/80">+2.3</p>
            <p className="text-green-800/80">+6.5</p>
            <p className="text-red-900/80">-13.5</p>
            <p className="text-green-800/80">+8.9</p>
            <p className="text-green-800/80">+29.6</p>
            <p className="text-green-800/80">+291</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Market Capitalization
          </p>
          <div className="grid grid-cols-8 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="text-red-900/80">-9.8</p>
            <p className="text-red-900/80">-0.6</p>
            <p className="text-green-800/80">+2.8</p>
            <p className="text-green-800/80">+5.9</p>
            <p className="text-red-900/80">-10.9</p>
            <p className="text-green-800/80">+11.4</p>
            <p className="text-green-800/80">+33.2</p>
            <p className="text-green-800/80">+325</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2 ">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Enterprise Value
          </p>
          <div className="grid grid-cols-8 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="text-red-900/80">-9.8</p>
            <p className="text-red-900/80">-0.6</p>
            <p className="text-green-800/80">+2.8</p>
            <p className="text-green-800/80">+5.9</p>
            <p className="text-red-900/80">-10.9</p>
            <p className="text-green-800/80">+11.4</p>
            <p className="text-green-800/80">+33.2</p>
            <p className="text-green-800/80">+315</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockPerformance;
