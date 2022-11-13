import { PersonalInformation } from "../../data";
import CV from "../../assets/ahmed-elbahy.pdf";
const PersonalAbout = () => {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
      <div className="personal-info">
        <h3 className="text-white mb-5 fw-bolder">Personal Information</h3>
        <div className="row g-5">
          {PersonalInformation.map((item) => {
            return (
              <div key={item.id} className="col-6">
                <div className="info d-flex flex-wrap gap-2 align-items-center">
                  <small className="text-white-50">{item.title}: </small>
                  <p className="text-white">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a href={CV} download className="btn main-btn mt-5">
          <span className="btn-name">download cv</span>
          <span className="btn-icon">
            <i className="fa-solid fa-download"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default PersonalAbout;
