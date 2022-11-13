import { useState } from "react";
import { WorksData } from "../../data";
import WorksBox from "./WorksBox";

const WorksSection = () => {
  const [items, setItems] = useState(WorksData);
  const filterWorks = (catItem) => {
    let filteredItems = WorksData.filter((filtItem) => {
      return filtItem.categoary === catItem;
    });
    setItems(filteredItems);
  };
  let myBtns = document.querySelectorAll(
    ".works-section .projects-filters li button"
  );
  myBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      myBtns.forEach((element) => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
  return (
    <div className="works-section section-padding">
      <div className="container">
        <div className="main-heading">My Projects</div>
        <ul className="projects-filters mb-5 d-flex flex-wrap gap-3 align-items-center justify-content-center">
          <li>
            <button className="active" onClick={() => setItems(WorksData)}>
              ALL
            </button>
          </li>
          <li>
            <button onClick={() => filterWorks("pure")}>HTML&CSS</button>
          </li>
          <li>
            <button onClick={() => filterWorks("bootstrap")}>BOOTSTRAP</button>
          </li>
          <li>
            <button onClick={() => filterWorks("java")}>JAVA SCRIPT</button>
          </li>
          <li>
            <button onClick={() => filterWorks("react")}>REACT JS</button>
          </li>
        </ul>
        <div className="row g-5 justify-content-center align-items-center">
          {items.map((worksBox) => {
            return <WorksBox key={worksBox.id} worksBox={worksBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
