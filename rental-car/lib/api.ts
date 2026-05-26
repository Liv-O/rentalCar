import axios from 'axios';
import { Car } from '@/types/car';

// axios.defaults.baseURL = 'https://car-rental-api.goit.global';
axios.defaults.baseURL = 'https://car-rental-api.goit.study';

export type getCarsResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

interface GetCarsProps {
  perPage?: number;
  page: number;

  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
}

export const getCars = async ({
  perPage = 12,
  page = 1,
  ...filters
}: GetCarsProps) => {
  const res = await axios.get<getCarsResponse>('/cars', {
    params: { page, perPage, ...filters },
  });
  return res.data;
};

export type getBrandsAndPricesResponse = {
  brands: string[];
  price: { min: number; max: number };
};

export const getBrandsAndPrices = async () => {
  const res = await axios.get<getBrandsAndPricesResponse>('/cars/filters');
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);
  return res.data;
};

interface BookingRequestBody {
  name: string;
  email: string;
  comment?: string;
}

interface BookingResponse {
  message: string;
}

export const createBookingRequest = async (
  carId: string,
  body: BookingRequestBody,
) => {
  const res = await axios.post<BookingResponse>(
    `/cars/${carId}/booking-requests`,
    body,
  );

  return res.data;
};
