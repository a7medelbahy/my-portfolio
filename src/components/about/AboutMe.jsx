import PersonalAbout from "./PersonalAbout";
import StatsAbout from "./StatsAbout";

const AboutMe = () => {
  return (
    <div className="about-me section-padding">
      <div className="container">
        <div className="main-heading">About Me</div>
        <div className="row gy-5 align-items-center">
          <PersonalAbout />
          <StatsAbout />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
