import css from './CarFeatures.module.css';
import { FiCheckCircle } from 'react-icons/fi';

interface CarFeaturesProps {
  features: string[];
}

export default function CarFeatures({ features }: CarFeaturesProps) {
  return (
    <div className={css.carFeatures}>
      <h2 className={css.featuresTitle}>Features</h2>
      <ul className={css.featuresList}>
        {features.map((feature, index) => (
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
