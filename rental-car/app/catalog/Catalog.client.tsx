'use client';

import { getCars } from '@/lib/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import css from '@/app/catalog/Catalog.module.css';
import CarsList from '@/components/CarsList/CarsList';

export function CatalogClient() {
  const {
    data: cars, //дістаємо всі історії на самому початку
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', 'all'],

    queryFn: () => getCars(),
    select: (data) => data.pages.flatMap((p) => p.cars),

    getNextPageParam: (lastPage) => {
      //для пагінації
      const currentPage = Number(lastPage.page);
      const totalPages = Number(lastPage.totalPages);

      if (currentPage < totalPages) {
        return currentPage + 1;
      }

      return undefined;
    },

    initialPageParam: 1,
    placeholderData: (previousData) => previousData, //поки не загрузились нові дані, старі залишаються (запобігання миготіню)
  });

  //   console.log('aaaaaaaaaa', cars);
  return (
    <>
      {' '}
      <div className="container">
        <div className={css.catalogList}>
          {cars && <CarsList cars={cars}></CarsList>}
        </div>
      </div>
    </>
  );
}
