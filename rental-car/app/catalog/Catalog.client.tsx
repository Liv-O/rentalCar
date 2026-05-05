'use client';

import { getBrands, getCars } from '@/lib/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import css from '@/app/catalog/Catalog.module.css';
import CarsList from '@/components/CarsList/CarsList';
import Button from '@/components/common/Button/Button';
import SelectFilter from '@/components/SelectFilter/SelectFilter';
import { useState } from 'react';

export function CatalogClient() {
  const [chosenBrand, setChosenBrand] = useState<string | null>(null);
  const [chosenPrice, setChosenPrice] = useState<string | null>(null);
  const {
    data: cars,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', 'all'],

    queryFn: ({ pageParam = 1 }) =>
      getCars({
        limit: 12,
        page: pageParam,
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

  return (
    <>
      {' '}
      <div className={`container ${css.catalogWrapper}`}>
        <div className={css.filterWrapper}>
          {brands && (
            <SelectFilter
              label={'Car brend'}
              placeholder={'Choose a brand'}
              options={brands}
              chosenValue={chosenBrand}
              setChosenValue={setChosenBrand}></SelectFilter>
          )}
          <SelectFilter
            label={'Price/ 1 hour'}
            placeholder={'Choose a price'}
            options={['4', '3', '5', '2', '1']}
            chosenValue={`To $${chosenPrice}`}
            setChosenValue={setChosenPrice}></SelectFilter>
        </div>
        <div className={css.catalogList}>
          {cars && <CarsList cars={cars}></CarsList>}
        </div>
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            isDisabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </Button>
        )}
      </div>
    </>
  );
}
