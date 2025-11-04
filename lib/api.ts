import { Photographer } from '@/types';

const API_BASE = 'http://localhost:3001';

export const fetchPhotographers = async (): Promise<Photographer[]> => {
  const response = await fetch(`${API_BASE}/photographers`);
  if (!response.ok) throw new Error('Failed to fetch photographers');
  return response.json();
};

export const fetchPhotographer = async (id: number): Promise<Photographer> => {
  const response = await fetch(`${API_BASE}/photographers/${id}`);
  if (!response.ok) throw new Error('Failed to fetch photographer');
  return response.json();
};