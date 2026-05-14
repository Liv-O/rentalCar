'use client';

import { getBrands, getCars } from '@/lib/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import css from '@/app/catalog/Catalog.module.css';
import CarsList from '@/components/CarsList/CarsList';
import Button from '@/components/common/Button/Button';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm/SearchFrom';

export function CatalogClient() {
  interface Filters {
    brand: string | undefined;
    price: string | undefined;
    from: string | undefined;
    to: string | undefined;
  }
  const defaultFilters = {
    brand: undefined,
    price: undefined,
    from: undefined,
    to: undefined,
  };
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const {
    data: cars,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', filters],

    queryFn: ({ pageParam = 1 }) =>
      getCars({
        limit: 12,
        page: pageParam,

        brand: filters.brand || undefined,
        rentalPrice: filters.price || undefined,
        minMileage: filters.from || undefined,
        maxMileage: filters.to || undefined,
        // brand: filters.brand,
        // rentalPrice: filters.price,
        // minMileage: filters.from,
        // maxMileage: filters.to,
      }),
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
    placeholderData: (previousData) => previousData,
  });

  const {
    data: brands,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  if (cars) {
    console.log(cars);
  }

  return (
    <>
      {' '}
      <div className={`container ${css.catalogWrapper}`}>
        {brands && (
          <SearchForm
            brands={brands}
            onSearch={setFilters}
          />
        )}

        <div className={css.catalogList}>
          {cars && <CarsList cars={cars}></CarsList>}
        </div>
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            isDisabled={isFetchingNextPage}
            type="button">
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </Button>
        )}
      </div>
    </>
  );
}
