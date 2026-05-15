import css from './CarFeatures.module.css';

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
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
