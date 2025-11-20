import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4'>
      <div className='container mx-auto max-w-2xl text-center'>
        <div className='mb-6'>
          <h1 className='mb-3 font-inter text-[115px] font-bold leading-none text-[#3A98FF] md:text-[180px]'>
            404
          </h1>
        </div>

        <div className='mb-10 space-y-3'>
          <h2 className='font-inter text-2xl font-bold text-gray-900 md:text-3xl'>
            Page Not Found
          </h2>
          <p className='mx-auto max-w-md font-inter text-base leading-relaxed text-gray-600 md:text-lg'>
            The geospatial coordinates you&apos;re looking for don&apos;t exist in our ecosystem.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Link
            href='/'
            className='inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[#2658AB] px-8 font-inter text-base text-white transition-all hover:scale-105 hover:bg-[#2658AB]/90 sm:w-auto'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

