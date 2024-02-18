import axios from 'axios';

import { apiConfig } from '../../config';

export const getContactsData = async () => {
  const apiUrl = apiConfig.contactsUrl;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error getting user data', error);
    throw error;
  }
};
