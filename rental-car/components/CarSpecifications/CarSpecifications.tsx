import css from './CarSpecifications.module.css';

interface CarSpecificationsProps {
  year: number;
  type: string;
  fuelConsumption: string;
  engineSize: string;
  mileage: number;
}

export default function CarSpecifications({
  year,
  type,
  fuelConsumption,
  engineSize,
  mileage,
}: CarSpecificationsProps) {
  return (
    <div className={css.carSpecifications}>
      <h2 className={css.specificationsTitle}>Car Specifications:</h2>
      <ul className={css.specificationsList}>
        <li className={css.specificationItem}>Year: {year}</li>
        <li className={css.specificationItem}>Type: {type}</li>
        <li className={css.specificationItem}>
          Fuel Consumption: {fuelConsumption}
        </li>
        <li className={css.specificationItem}>Engine: {engineSize}</li>
        <li className={css.specificationItem}>
          Mileage: {Math.round(mileage * 1.60934)} km
        </li>
      </ul>
    </div>
  );
}
