import { ClipLoader } from 'react-spinners';

import css from './LoadingPage.module.css';

export default function Loading() {
  return (
    <div className={css.loadingPage}>
      <div className={css.loadingCard}>
        <ClipLoader
          size={64}
          color="#3470FF"
        />

        <h2 className={css.title}>Loading...</h2>

        <p className={css.description}>
          Please wait a moment while we prepare everything for you.
        </p>
      </div>
    </div>
  );
}
