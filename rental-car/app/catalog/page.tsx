import { getCars } from '@/lib/api';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { CatalogClient } from './Catalog.client';

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['cars', 'all'],
    queryFn: () => getCars(),
    initialPageParam: 1,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}

// const Cars = async () => {
//   const cars = await getCars();
//   console.log('cars', cars);

//   return <div>Cars</div>;
// };
