import CostStructure from "./highlights/CostStructure";
import DebtCF from "./highlights/DebtCF";
import Earnings from "./highlights/Earnings";

import RevenueProfit from "./highlights/RevenueProfit";
import StockOverview from "./highlights/StockOverview";
import StockPerformance from "./highlights/StockPerformance";
import ValMultiples from "./highlights/ValMultiples";

function CompanyHL() {
  return (
    <div className="flex flex-col gap-2 items-center overflow-scroll h-[39rem]">
      <StockOverview />
      <StockPerformance />
      <ValMultiples />
      <Earnings />
      <RevenueProfit />
      <CostStructure />
      <DebtCF />
    </div>
  );
}

export default CompanyHL;
