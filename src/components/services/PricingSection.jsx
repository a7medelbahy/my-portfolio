import { PricingData } from "../../data";
import PricingPlanBox from "./PricingPlanBox";

const PricingSection = () => {
  return (
    <div className="price-plans section-padding">
      <div className="container">
        <div className="main-heading">Pricing Plans</div>
        <div className="row g-5 justify-content-center align-items-center">
          {PricingData.map((pricePlanBox) => {
            return (
              <PricingPlanBox
                key={pricePlanBox.id}
                pricePlanBox={pricePlanBox}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
