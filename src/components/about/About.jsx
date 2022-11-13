import "./about.css";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about">
      <AboutMe />
      <Skills />
      <Resume />
    </div>
  );
};

export default About;
