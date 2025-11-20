export default function Loading() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto max-w-4xl px-4 py-8'>
        {/* Header Skeleton */}
        <div className='mb-6 animate-pulse rounded-lg border bg-white p-6 shadow-sm'>
          <div className='flex items-start gap-4'>
            {/* Logo Skeleton */}
            <div className='h-16 w-16 rounded-lg bg-gray-200' />
            
            {/* Name and Location Skeleton */}
            <div className='flex-1 space-y-3'>
              <div className='h-8 w-64 rounded bg-gray-200' />
              <div className='h-4 w-40 rounded bg-gray-200' />
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className='mb-4 border-b'>
          <div className='flex gap-4'>
            <div className='h-10 w-20 rounded bg-gray-200' />
            <div className='h-10 w-20 rounded bg-gray-200' />
            <div className='h-10 w-20 rounded bg-gray-200' />
            <div className='h-10 w-24 rounded bg-gray-200' />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className='animate-pulse rounded-lg border bg-white p-6'>
          <div className='space-y-4'>
            <div className='h-6 w-32 rounded bg-gray-200' />
            <div className='space-y-2'>
              <div className='h-4 w-full rounded bg-gray-200' />
              <div className='h-4 w-full rounded bg-gray-200' />
              <div className='h-4 w-3/4 rounded bg-gray-200' />
            </div>
            
            <div className='pt-4'>
              <div className='h-6 w-40 rounded bg-gray-200' />
              <div className='mt-2 space-y-2'>
                <div className='h-4 w-full rounded bg-gray-200' />
                <div className='h-4 w-5/6 rounded bg-gray-200' />
              </div>
            </div>

            <div className='pt-4'>
              <div className='h-6 w-36 rounded bg-gray-200' />
              <div className='mt-2 flex flex-wrap gap-2'>
                <div className='h-8 w-24 rounded-full bg-gray-200' />
                <div className='h-8 w-28 rounded-full bg-gray-200' />
                <div className='h-8 w-20 rounded-full bg-gray-200' />
                <div className='h-8 w-32 rounded-full bg-gray-200' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}