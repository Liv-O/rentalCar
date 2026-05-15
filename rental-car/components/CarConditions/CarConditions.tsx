import css from './CarConditions.module.css';
import { FiCheckCircle } from 'react-icons/fi';

interface CarConditionsProps {
  rentalConditions: string[];
}

export default function CarConditions({
  rentalConditions,
}: CarConditionsProps) {
  return (
    <div className={css.carConditions}>
      <h2 className={css.conditionsTitle}>Rental Conditions:</h2>
      <ul className={css.conditionsList}>
        {rentalConditions.map((condition, index) => (
          <li
            className={css.conditionItem}
            key={index}>
            <FiCheckCircle className={css.icon} /> {condition}
          </li>
        ))}
      </ul>
    </div>
  );
}
