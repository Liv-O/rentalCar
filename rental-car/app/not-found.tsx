'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';

import css from './NotFoundPage.module.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={css.notFoundPage}>
      <div className={css.notFoundCard}>
        <span className={css.code}>404</span>

        <h1 className={css.title}>Page not found</h1>

        <p className={css.description}>
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>

        <p className={css.redirectText}>
          You will be redirected to the homepage in a few seconds...
        </p>

        <div className={css.buttonWrapper}>
          <Button
            type="button"
            isDisabled={false}
            onClick={() => router.push('/')}>
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
