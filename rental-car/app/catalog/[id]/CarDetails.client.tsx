'use client';

import { getCarById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import css from '@/app/catalog/[id]/CarDetails.module.css';
import BookForm from '@/components/BookForm/BookForm';
import CarHeader from '@/components/CarHeader/CarHeader';
import CarConditions from '@/components/CarConditions/CarConditions';
import CarSpecifications from '@/components/CarSpecifications/CarSpecifications';
import CarFeatures from '@/components/CarFeatures/CarFeatures';

interface CarDetailsProps {
  id: string;
}

export default function CarDetailsClient({ id }: CarDetailsProps) {
  const { data: car } = useQuery({
    queryKey: ['car', id],
    queryFn: async () => getCarById(id),
  });
  return (
    <>
      {' '}
      {car && (
        <div className={`container ${css.carDetailsContainer}`}>
          <div className={css.imageFormContainer}>
            <Image
              src={car.img}
              alt={car.model}
              width={640}
              height={512}
              className={css.carImage}
            />
            <BookForm></BookForm>
          </div>
          <div className={css.carInfo}>
            <CarHeader
              brand={car.brand}
              model={car.model}
              year={car.year}
              address={car.address}
              rentalPrice={car.rentalPrice}
              description={car.description}
            />
            <CarConditions rentalConditions={car.rentalConditions} />
            <div className={css.divider}></div>
            <CarSpecifications
              year={car.year}
              type={car.type}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
              mileage={car.mileage}
            />
            <div className={css.divider}></div>
            <CarFeatures functionalities={car.functionalities} />
          </div>
        </div>
      )}
    </>
  );
}
