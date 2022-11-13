import { ServicesData } from "../../data";
import ServiceBox from "./ServiceBox";
const ServicesSection = () => {
  return (
    <div className="services section-padding">
      <div className="container">
        <div className="main-heading">services</div>
        <div className="row g-5 align-items-center justify-content-center text-center">
          {ServicesData.map((serviceBox) => {
            return <ServiceBox key={serviceBox.id} serviceBox={serviceBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
