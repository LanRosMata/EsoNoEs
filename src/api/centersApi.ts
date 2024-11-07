import centersData from '../data/centers.json';

export interface Center {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  image: string;
}

export const searchCenters = async (query: string): Promise<Center[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const normalizedQuery = query.toLowerCase().trim();
  
  return centersData.centers.filter(center =>
    center.city.toLowerCase().includes(normalizedQuery) ||
    center.address.toLowerCase().includes(normalizedQuery)
  );
};