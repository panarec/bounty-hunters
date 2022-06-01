const BASE_URL = 'https://api.fbi.gov/';

export const fetchCriminals = async (path, params) => {
  const response = await fetch(`${BASE_URL}/${path}?${params}`);
  if (!response.ok) {
    throw new Error('Response not OK.');
  }
  return response.json();
};

export const fetchCriminal = async (path, id) => {
  const response = await fetch(`${BASE_URL}/${path}/${id}`);
  if (!response.ok) {
    throw new Error('Response not OK.');
  }
  return response.json();
};
