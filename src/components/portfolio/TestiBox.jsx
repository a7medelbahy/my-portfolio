const TestiBox = (props) => {
    return (
      <div className="col-lg-6 offset-lg-3">
        <div
          data-aos="zoom-out"
          data-aos-duration="2000"
          className="testi rounded p-3 px-lg-5 py-lg-4 d-flex flex-column justify-content-center align-items-center text-center gap-5"
        >
          <div className="testi-desc rounded px-4 py-5">
            <p>
              <sup>
                <i className="me-2 fa-solid fa-quote-left"></i>
              </sup>
              {props.testiItem.testi}{" "}
              <sub>
                <i className="ms-2 fa-solid fa-quote-right"></i>
              </sub>
            </p>
          </div>
          <div className="testi-info">
            <img
              src={props.testiItem.img}
              className="img-fluid w-25 rounded-circle"
              alt="testi img"
            />
            <h4 className="mb-0 mt-3 text-white">{props.testiItem.name}</h4>
            <small className="text-white-50">{props.testiItem.job}</small>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestiBox;
  