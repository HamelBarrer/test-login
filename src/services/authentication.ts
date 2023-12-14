import { API } from '../constants/api';

export const authenticationUser = async (data) => {
  try {
    const response = await fetch(API.SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const dataJson = await response.json();
    if (!response.ok) {
      const [messageError] = Object.values(dataJson);
      throw new Error(messageError as string);
    }

    return dataJson;
  } catch (error) {
    throw new Error(error.message);
  }
};
