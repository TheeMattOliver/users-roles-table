import {QueryClient} from '@tanstack/react-query'

/**
 * Hydrates the React Query cache with initial data by prefetching queries.
 *
 *  Pass `dehydratedState` to the client for React Query hydration
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function hydrateQueryCache(queryClient: QueryClient, fetchers: {[key: string]: () => Promise<any>}) {
  for (const [key, fetcher] of Object.entries(fetchers)) {
    await queryClient.prefetchQuery({
      queryKey: [key],
      queryFn: fetcher
    })
  }
}
