import css from '@/components/Hero/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className={css.hero}>
        <div className={css.heroContent}>
          <h1 className={css.mainTitle}>Find your perfect rental car</h1>
          <p className={css.heroText}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link
            href="/catalog"
            className={css.heroLink}>
            View Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
