import css from '@/components/CarCard/CarCard.module.css';
import { Car } from '@/types/car';
import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  function parseAddress(address: string) {
    const [_, city, country] = address.split(', ');
    return { city, country };
  }

  const { city, country } = parseAddress(car.address);
  return (
    <li className={css.carItem}>
      <Image
        src={car.img}
        alt={car.model}
        width={244}
        height={268}
        className={css.carImg}></Image>
      <div className={css.cardInfoWrapper}>
        <div className={css.cardMainInfo}>
          <h3 className={css.cardCarTitle}>
            {car.brand} <span className={css.carModel}>{car.model}</span>,{' '}
            {car.year}
          </h3>{' '}
          <span className={css.carPrice}>${car.rentalPrice}</span>
        </div>
        <ul className={css.aboutCarList}>
          <li className={css.aboutCarItem}>{city}</li>
          <li className={css.aboutCarItem}>{country}</li>
          <li className={css.aboutCarItem}>{car.rentalCompany}</li>
          <li className={css.aboutCarItem}>{car.type}</li>
          <li className={css.aboutCarItem}>
            {Math.round(Number(car.mileage) * 1.60934)} km
          </li>
        </ul>
      </div>
      <Link
        href={`/catalog/${car.id}`}
        className={css.aboutCarLink}
        target="_blank">
        Read more
      </Link>
    </li>
  );
}
