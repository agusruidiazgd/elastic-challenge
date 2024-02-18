import { ContactModel } from '../../types';

export const contactFormatter = (contact: ContactModel) => {
  return {
    id: contact.id,
    job: contact.job,
    logoUrl: contact.icon,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    companyName: contact.company_name,
    profileImageUrl: contact.profile_image,
  };
};
