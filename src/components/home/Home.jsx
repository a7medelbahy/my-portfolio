import "./home.css";
import HomeImg from "../../assets/My project2.png";
import CV from "../../assets/ahmed-elbahy.pdf";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <div className="container d-flex justify-conetnt-center align-items-center">
        <div className="home-contents section-padding">
          <div className="row gy-5 justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="home-img">
                <img
                  src={HomeImg}
                  className="img-fluid w-100 pt-5 px-3 d-block"
                  alt="Ahmed Elbahy"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div
                className="home-content p-3 text-center text-md-start"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="name d-flex justify-content-center justify-content-md-start flex-wrap align-items-center gap-3">
                  <h1 className="fw-bolder">- I'M</h1>
                  <div>
                    <h2 className="text-white">AHMED ELBAHY</h2>
                    <h3 className="text-white-50">Front-End Web Developer</h3>
                  </div>
                </div>
                <p className="my-4 text-white">
                Fresh graduated electrical power engineer. Studied front-end web development and have built more than 10 websites some were with pure HTML, CSS, Java Script and some with frameworks like Bootstrap and React JS. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Always ambitious.
                </p>
                <div className="d-flex gap-5 justify-content-center align-items-center">
                  <a href={CV} download className="btn main-btn">
                    <span className="btn-name">download cv</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-download"></i>
                    </span>
                  </a>
                  <button
                    className="btn main-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span className="btn-name">hire me</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-right-long"></i>
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
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
