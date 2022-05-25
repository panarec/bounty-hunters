const BASE_URL = 'https://api.fbi.gov/wanted/v1';

export const FetchCriminals = async (path, params) => {
  const response = await fetch(`${BASE_URL}/${path}?${params}`);
  console.log(response)
  if (!response.ok) {
    throw new Error('Response not OK.');
  }
  return response.json();
};
