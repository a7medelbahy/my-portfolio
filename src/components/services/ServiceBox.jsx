const ServiceBox = (props) => {
    return (
      <div
        className="col-md-6 col-lg-4"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div className="service-box p-3 d-flex justify-content-center align-items-center flex-column gap-5 text-center rounded overflow-hidden">
          <h2 className="text-white-50 display-4">{props.serviceBox.icon}</h2>
          <h4 className="text-white">{props.serviceBox.title}</h4>
          <div className="service-info p-3 d-flex justify-content-center align-items-center">
            {props.serviceBox.desc}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceBox;
  