import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import { SkillsData } from "../../data";
  const Skills = () => {
    return (
      <div className="my-skills section-padding">
        <div className="container">
          <div className="main-heading">My Skillss</div>
          <div className="row g-5 justify-content-center align-items-center">
            {SkillsData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-md-6 col-lg-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="skill-box d-flex flex-column justify-content-center align-items-center text-center gap-5">
                    <CircularProgressbar
                      className="w-50"
                      value={item.rate}
                      text={`${item.rate}%`}
                    />
                    <h4>{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  