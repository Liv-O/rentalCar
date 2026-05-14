import { getCarById } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CarDetailsClient from './CarDetails.client';

type CarDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function CarDetails({ params }: CarDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['car', id],
    queryFn: async () => getCarById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient id={id} />
    </HydrationBoundary>
  );
}
