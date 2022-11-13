import { ResumeData } from "../../data";
import ResumeBox from "./ResumeBox";
const Resume = () => {
  return (
    <div className="resume section-padding">
      <div className="container">
        <div className="main-heading">resume</div>
        <div className="row g-5">
          {ResumeData.map((resumeItem) => {
            return (
              <div key={resumeItem.id} className="col-lg-6">
                <div
                  className="resume-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="text-white ps-4 mb-4">{resumeItem.heading}</h4>
                  <div className="content ps-4 d-flex flex-column gap-4">
                    {resumeItem.info.map((resumeBox) => {
                      return (
                        <ResumeBox key={resumeBox.id} resumeBox={resumeBox} />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
