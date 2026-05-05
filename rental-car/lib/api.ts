import axios from 'axios';
import { Car } from '@/types/car';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export type getCarsResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

interface GetCarsProps {
  limit?: number;
  page: number;
}

export const getCars = async ({ limit = 12, page = 1 }: GetCarsProps) => {
  const res = await axios.get<getCarsResponse>('/cars', {
    params: { page, limit },
  });
  return res.data;
};

export type getBrandsResponse = string[];

export const getBrands = async () => {
  const res = await axios.get<getBrandsResponse>('/brands');
  return res.data;
};
