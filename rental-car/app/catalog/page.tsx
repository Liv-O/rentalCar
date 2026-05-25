import { getCars } from '@/lib/api';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { CatalogClient } from './Catalog.client';

export default async function Catalog() {
  const queryClient = new QueryClient();

  const defaultFilters = {
    brand: undefined,
    price: undefined,
    from: undefined,
    to: undefined,
  };
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['cars', defaultFilters],
    queryFn: ({ pageParam = 1 }) =>
      getCars({
        limit: 12,
        page: pageParam,
      }),
    initialPageParam: 1,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
