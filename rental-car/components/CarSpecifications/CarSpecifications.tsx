import css from './CarSpecifications.module.css';

import { FiCalendar, FiTruck } from 'react-icons/fi';
import { GiGasPump } from 'react-icons/gi';
import { TbManualGearbox } from 'react-icons/tb';
import { PiRoadHorizonDuotone } from 'react-icons/pi';

interface CarSpecificationsProps {
  year: number;
  type: string;
  fuelConsumption: string;
  engine: string;
  mileage: number;
}

export default function CarSpecifications({
  year,
  type,
  fuelConsumption,
  engine,
  mileage,
}: CarSpecificationsProps) {
  return (
    <div className={css.carSpecifications}>
      <h2 className={css.specificationsTitle}>Car Specifications:</h2>

      <ul className={css.specificationsList}>
        <li className={css.specificationItem}>
          <FiCalendar className={css.iconSpec} />
          Year: {year}
        </li>

        <li className={css.specificationItem}>
          <FiTruck className={css.iconSpec} />
          Type: {type}
        </li>

        <li className={css.specificationItem}>
          <GiGasPump className={css.iconSpec} />
          Fuel Consumption: {fuelConsumption}
        </li>

        <li className={css.specificationItem}>
          <TbManualGearbox className={css.iconSpec} />
          Engine: {engine}
        </li>

        <li className={css.specificationItem}>
          <PiRoadHorizonDuotone className={css.iconSpec} />
          Mileage: {Math.round(mileage * 1.60934)} km
        </li>
      </ul>
    </div>
  );
}
