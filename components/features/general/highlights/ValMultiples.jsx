function ValMultiples() {
  return (
    <div className="w-[90%] h-[20rem]  flex flex-col items-center justify-between  text-center mb-20">
      <div
        style={{ boxShadow: "1px 1px 1px midnightblue" }}
        className="h-[12%] w-full flex items-center justify-between px-2 border-b border-blue-950 rounded-lg "
      >
        <p className="italic text-blue-900">Valuation Multiples</p>
        <div className="grid grid-cols-5 gap-5 italic font-semibold text-blue-900/75 text-sm">
          <p className="w-16">Current</p>
          <p className="w-16">1Y-High</p>
          <p className="w-16">1Y-Low</p>
          <p className="w-16">5Y-High</p>
          <p className="w-16">5Y-Low</p>
        </div>
      </div>
      <div className="h-[88%] w-full flex flex-col items-start justify-start mt-3">
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Price-to-Earnings
          </p>
          <div className="grid grid-cols-5 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="w-16">22.4x</p>
            <p className="w-16">27.5x</p>
            <p className="w-16">17.3x</p>
            <p className="w-16">32.6x</p>
            <p className="w-16">16.2x</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Price-to-Sales
          </p>
          <div className="grid grid-cols-5 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="w-16">8.4x</p>
            <p className="w-16">10.3x</p>
            <p className="w-16">5.9x</p>
            <p className="w-16">13.7x</p>
            <p className="w-16">5.8x</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            Price-to-Book
          </p>
          <div className="grid grid-cols-5 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="w-16">16.4x</p>
            <p className="w-16">19.5x</p>
            <p className="w-16">9.7x</p>
            <p className="w-16">25.0x</p>
            <p className="w-16">9.5x</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            EV/Revenue
          </p>
          <div className="grid grid-cols-5 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="w-16">8.4x</p>
            <p className="w-16">10.3x</p>
            <p className="w-16">5.9x</p>
            <p className="w-16">13.7x</p>
            <p className="w-16">5.8x</p>
          </div>
        </div>
        <div className="h-[2rem] w-full flex items-center justify-between px-2">
          <p className="ml-2 text-stone-900/80 font-semibold text-sm">
            EV/EBITDA
          </p>
          <div className="grid grid-cols-5 gap-5 text-stone-900/80 text-sm font-semibold">
            <p className="w-16">22.4x</p>
            <p className="w-16">27.5x</p>
            <p className="w-16">17.3x</p>
            <p className="w-16">32.6x</p>
            <p className="w-16">16.2x</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValMultiples;
