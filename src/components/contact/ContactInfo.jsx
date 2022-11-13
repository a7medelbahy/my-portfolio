import { ContactInfoData, SocialItems } from "../../data";

const ContactInfo = () => {
  return (
    <div className="col-lg-4" data-aos="fade-down" data-aos-duration="1000">
      <div className="contact-info d-flex flex-column gap-4">
        <div className="introduction">
          <h4 className="text-white">DON'T BE SHY !</h4>
          <p className="text-white-50">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div className="info-content d-flex flex-column gap-4">
          {ContactInfoData.map((contactBox) => {
            return (
              <div
                key={contactBox.id}
                className="contact-box d-flex gap-3 flex-wrap align-items-center"
              >
                <div className="info-icon">{contactBox.icon}</div>
                <div className="info-data">
                  <h4 className="text-white">{contactBox.title}</h4>
                  <a href={contactBox.link} target="_blank" rel="noreferrer">
                    {contactBox.info}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <ul className="social-media d-flex gap-3 align-items-center">
          {SocialItems.map((socialItem) => {
            return (
              <li key={socialItem.id}>
                <a href={socialItem.link} target="_blank" rel="noreferrer">
                  {socialItem.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
