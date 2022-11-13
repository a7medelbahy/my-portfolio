import { StaticsAbout } from "../../data";

const StatsAbout = () => {
  return (
    <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000">
      <div className="about-stats">
        <div className="row g-5">
          {StaticsAbout.map((item) => {
            return (
              <div key={item.id} className="col-6">
                <div className="static p-4 rounded">
                  <h2 className="display-4">
                    {item.num}
                    <sup>+</sup>
                  </h2>
                  <p className="text-white">ـــــ {item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsAbout;
