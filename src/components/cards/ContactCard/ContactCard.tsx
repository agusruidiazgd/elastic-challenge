import './ContactCard.styles.scss';
import { ContactCardProps } from './ContactCard.types';

export const ContactCard = (props: ContactCardProps) => {
  const { contact } = props;
  const { job, companyName, name, phone, logoUrl, profileImageUrl, email } =
    contact;

  return (
    <div className="contact-card">
      <div className="img-container">
        <div
          className="contact-img"
          style={{ backgroundImage: `url(${profileImageUrl})` }}
        >
          <img className="img-logo" src={logoUrl} />
        </div>
      </div>
      <div className="main">
        <div className="title-container">
          <h4>{name}</h4>
          <div className="contact-info">
            <p className="card-text">{job}</p>|
            <p className="card-text">{companyName}</p>
          </div>
        </div>
        <div className="description-container">
          <div className="phone-info">
            <p className="card-text">Phone Number</p>
            <p className="card-text">{phone}</p>
          </div>
          <div>
            <p className="card-text">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
