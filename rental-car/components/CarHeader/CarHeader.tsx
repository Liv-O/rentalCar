import css from '@/components/CarHeader/CarHeader.module.css';

interface CarHeaderProps {
  brand: string;
  model: string;
  year: number;

  location: {
    city: string;
    country: string;
    address: string;
  };

  rentalPrice: string;
  description: string;
}

export default function CarHeader({
  brand,
  model,
  year,
  location,
  rentalPrice,
  description,
}: CarHeaderProps) {
  return (
    <div className={css.carHeader}>
      <h1 className={css.carHeaderTitle}>
        {brand} {model}, {year}
      </h1>

      <span className={css.carHeaderAddress}>
        {location.city}, {location.country}
      </span>

      <span className={css.carHeaderPrice}>${rentalPrice}</span>

      <p className={css.carHeaderDescription}>{description}</p>
    </div>
  );
}
