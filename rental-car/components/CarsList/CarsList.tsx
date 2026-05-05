import css from '@/components/CarsList/CarsList.module.css';
import { Car } from '@/types/car';
import CarCard from '@/components/CarCard/CarCard';
import Button from '../common/Button/Button';

interface CarListProps {
  cars: Car[];
}

export default function CarList({ cars }: CarListProps) {
  return (
    <>
      <ul className={css.carList}>
        {cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              car={car}></CarCard>
          );
        })}
      </ul>
    </>
  );
}
