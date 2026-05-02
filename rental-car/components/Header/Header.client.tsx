'use client';

import Link from 'next/link';
import Image from 'next/image';
import css from '@/components/Header/Header.module.css';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/">
        <Image
          className={css.logo}
          width={102}
          height={16}
          src="/RentalCar-svg-opt.svg"
          alt="carRental-logo"
        />
      </Link>

      <nav className={css.headerNavigation}>
        <ul className={css.headerNavList}>
          <li className={css.headerNavItem}>
            <Link
              href="/"
              className={clsx(css.headerNavItemLink, {
                [css.active]: pathname === '/',
              })}>
              Home
            </Link>
          </li>

          <li className={css.headerNavItem}>
            <Link
              href="/catalog"
              className={clsx(css.headerNavItemLink, {
                [css.active]: pathname === '/catalog',
              })}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
