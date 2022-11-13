import "./contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="contact-me py-5">
      <div className="container">
        <div className="main-heading">Contact Me</div>
        <div className="contact-content py-3">
          <div className="row g-5 justify-content-center align-items-center">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
