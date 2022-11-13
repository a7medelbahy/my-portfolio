import Contact from "../contact/Contact";

const PricingPlanBox = (props) => {
  return (
    <div
      className="col-md-6 col-lg-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="plan-box rounded overflow-hidden d-flex flex-column gap-4 align-items-center justify-content-center">
        <div className="price-box p-4 text-center d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-white fw-bolder">{props.pricePlanBox.title}</h4>
          <h3 className="my-3 rounded-circle d-flex align-items-center justify-content-center">
            {props.pricePlanBox.icon}
          </h3>
          <p>
            <sup>$</sup>
            {props.pricePlanBox.price}{" "}
            <sub className="text-white-50">/Month</sub>
          </p>
        </div>
        <ul className="plan-features d-flex flex-column gap-3 text-center">
          {props.pricePlanBox.features.map((featItem) => {
            return (
              <li className="text-white-50" key={featItem.id}>
                {featItem.feature}
              </li>
            );
          })}
        </ul>
        <button
          className="btn main-btn my-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="btn-name">Choose Plan</span>
          <span className="btn-icon">
            <i className="fa-solid fa-hand-holding-heart"></i>
          </span>
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-black">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Contact Me
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanBox;
