import { Photographer } from '@/types';

export const fetchPhotographers = async (): Promise<Photographer[]> => {
  try {
    const response = await fetch('/api/photographers');
    if (!response.ok) {
      throw new Error(`Failed to fetch photographers: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.photographers || data;
  } catch (error) {
    console.error('Error fetching photographers:', error);
    throw error;
  }
};

export const fetchPhotographer = async (id: number): Promise<Photographer> => {
  const response = await fetch(`/api/photographers/${id}`);
  if (!response.ok) throw new Error('Failed to fetch photographer');
  return response.json();
};