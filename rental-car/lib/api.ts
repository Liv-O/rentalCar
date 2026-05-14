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

  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

export const getCars = async ({
  limit = 12,
  page = 1,
  ...filters
}: GetCarsProps) => {
  const res = await axios.get<getCarsResponse>('/cars', {
    params: { page, limit, ...filters },
  });
  return res.data;
};

export type getBrandsResponse = string[];

export const getBrands = async () => {
  const res = await axios.get<getBrandsResponse>('/brands');
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);
  return res.data;
};
