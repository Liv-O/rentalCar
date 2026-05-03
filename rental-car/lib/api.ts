import axios from 'axios';
import { Car } from '@/types/car';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export type getCarsResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

export const getCars = async () => {
  const res = await axios.get<getCarsResponse>('/cars');
  return res.data;
};
