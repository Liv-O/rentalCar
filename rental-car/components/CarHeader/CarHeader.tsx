import css from '@/components/CarHeader/CarHeader.module.css';

interface CarHeaderProps {
  brand: string;
  model: string;
  year: number;
  address: string;
  rentalPrice: string;
  description: string;
}

export default function CarHeader({
  brand,
  model,
  year,
  address,
  rentalPrice,
  description,
}: CarHeaderProps) {
  function parseAddress(address: string) {
    const [_, city, country] = address.split(', ');
    return { city, country };
  }

  return (
    <>
      <h1 className={css.carHeaderTitle}>
        {brand} {model}, {year}
      </h1>
      <span className={css.carHeaderAddress}>
        {parseAddress(address).city}, {parseAddress(address).country}
      </span>
      <span className={css.carHeaderPrice}>${rentalPrice}</span>
      <p className={css.carHeaderDescription}>{description}</p>
    </>
  );
}
