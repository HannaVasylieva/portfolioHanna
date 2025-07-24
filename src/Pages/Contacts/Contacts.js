import "./Contacts.scss";

export const Contacts = () => {
  return (
    <section className="contacts">
      <p className="contacts__title">Contact Me</p>
      <ul className="contacts__list">
        <li className="contacts__item">
          <img className="contacts__icon" src="phone.png" alt="phone icon" />
          <a href="tel:+15872536600" className="contacts__link">
            +1 (587) 253-6000
          </a>
        </li>
        <li className="contacts__item">
          <img className="contacts__icon" src="communication.png" alt="mail icon" />
          <a href="mailto: hannafrontend@gmail.com" className="contacts__link">
            hannafrontend@gmail.com
          </a>
        </li>
        <li className="contacts__item">
          <img className="contacts__icon" src="social.png" alt="linkedin icon" />
          <a
            href="https://www.linkedin.com/in/hanna-vasylieva-6a2752298/"
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contacts__item">
          <img className="contacts__icon" src="github.png" alt="github icon" />
          <a
            href="https://github.com/HannaVasylieva"
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};
