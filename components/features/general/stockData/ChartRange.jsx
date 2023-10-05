function ChartRange() {
  return (
    <div className="grid grid-cols-8 w-3/4 h-20  mt-8 shadow-watchList rounded-full">
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold rounded-l-full">
        <span className="text-[0.85rem]">90 mins</span>
        <span className="group-hover:italic text-blue-700">+14.1%</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">1 day</span>
        <span className="group-hover:italic text-orange-700">(4.5%)</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">5 Days</span>
        <span className="group-hover:italic text-orange-700">(4.5%)</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">1 Month</span>
        <span className="group-hover:italic text-orange-700">(1.8%)</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">6 Months</span>
        <span className="group-hover:italic text-blue-700">+12.4%</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">1 Year</span>
        <span className="group-hover:italic text-blue-700">+18.3%</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold">
        <span className="text-[0.85rem]">5 Years</span>
        <span className="group-hover:italic text-blue-700">+124%</span>
      </button>
      <button className="flex flex-col items-center justify-center text-md gap-2 group hover:bg-sky-200/25 hover:font-semibold rounded-r-full">
        <span className="text-[0.85rem]">All</span>
        <span className="group-hover:italic text-blue-700">+1245%</span>
      </button>
    </div>
  );
}

export default ChartRange;
