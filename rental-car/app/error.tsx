'use client';

import css from './ErrorPage.module.css';
import Button from '@/components/common/Button/Button';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className={css.errorPage}>
      <div className={css.errorCard}>
        <span className={css.errorCode}>Oops...</span>

        <h1 className={css.title}>Something went wrong</h1>

        <p className={css.description}>
          We couldn&apos;t load the page. Please try again or come back later.
        </p>

        <div className={css.buttonErrorWrapper}>
          <Button
            type="button"
            isDisabled={false}
            onClick={reset}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
