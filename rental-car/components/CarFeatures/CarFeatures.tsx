import css from './CarFeatures.module.css';
import { FiCheckCircle } from 'react-icons/fi';

interface CarFeaturesProps {
  functionalities: string[];
}

export default function CarFeatures({ functionalities }: CarFeaturesProps) {
  return (
    <div className={css.carFeatures}>
      <h2 className={css.featuresTitle}>Features</h2>
      <ul className={css.featuresList}>
        {functionalities.map((feature, index) => (
          <li
            key={index}
            className={css.featureItem}>
            <FiCheckCircle className={css.iconFeature} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
