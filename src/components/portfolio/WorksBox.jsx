import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const WorksBox = (props) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div
      className="col-md-6 col-lg-4"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="works-box d-flex justify-content-center align-items-center flex-column gap-5 text-center rounded overflow-hidden">
        <div className="works-img">
          <img
            src={props.worksBox.img}
            className="img-fluid w-100 d-block"
            alt={props.worksBox.title}
          />
        </div>
        <div className="works-info p-3 d-flex flex-column gap-3 justify-content-center align-items-center">
          <h4 className="text-white fw-bold">{props.worksBox.title}</h4>
          <p className="text-white">{props.worksBox.desc}</p>
          <a
            href={props.worksBox.link}
            target="_blank"
            rel="noreferrer"
            className="btn main-btn"
          >
            <span className="btn-name">View Source</span>
            <span className="btn-icon">
              <i className="fa-solid fa-laptop-code"></i>
            </span>
          </a>
          <button className="btn main-btn" onClick={() => setLgShow(true)}>
            <span className="btn-name">Watch Demo</span>
            <span className="btn-icon">
              <i className="fa-solid fa-play"></i>
            </span>
          </button>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title
                className="text-black"
                id="example-modal-sizes-title-lg"
              >
                {props.worksBox.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video className="w-100" controls autoPlay>
                <source src={props.worksBox.video} type="video/mp4" />
              </video>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default WorksBox;
