import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72k3eqd",
        "template_fm68bce",
        form.current,
        "4nqpOkn7_7eP3R-MX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row g-5">
            <div className="col-md-6">
              <input
                type="text"
                name="UserName"
                placeholder="Your Name"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="E-Mail"
                placeholder="Your E-Mail"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                name="Subject"
                placeholder="Your Subject"
                className="p-2 rounded w-100"
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                className="p-2 rounded w-100"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn main-btn mt-5">
            <span className="btn-name">Send Message</span>
            <span className="btn-icon">
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
