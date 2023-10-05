/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import PageNav from "../components/PageNav";
import { getPricingPlans } from "./services/apiLobby";
import PricingBox from "../components/PricingBox";

function Pricing() {
  const pricingPlans = useLoaderData();
  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 flex items-center justify-center gap-28 mt-5">
        {pricingPlans.map((plan, i) => (
          <PricingBox
            name={plan.name}
            price={plan.price}
            allFeatures={plan.allFeatures}
            included={plan.included}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const pricingPlans = await getPricingPlans();
  return pricingPlans;
}

export default Pricing;
