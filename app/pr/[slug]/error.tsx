'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  console.log(error);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4'>
      <div className='container mx-auto max-w-2xl text-center'>
        <div className='mb-6 flex justify-center'>
          <div className='rounded-full bg-red-50 p-5'>
            <AlertTriangle className='h-12 w-12 text-red-500' />
          </div>
        </div>

        <div className='mb-8 space-y-2'>
          <h2 className='font-inter text-xl font-bold text-gray-900 md:text-2xl'>
            Something Went Wrong
          </h2>
          <p className='mx-auto max-w-md font-inter text-sm leading-relaxed text-gray-600 md:text-base'>
            We encountered an error while loading this profile. Please try again.
          </p>
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className='mx-auto mt-3 max-w-lg rounded-lg bg-gray-50 p-3 text-left'>
              <p className='text-xs font-mono text-gray-700'>{error.message}</p>
            </div>
          )}
        </div>

        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <button
            onClick={reset}
            className='inline-flex h-10 w-full items-center justify-center rounded-[12px] bg-[#2658AB] px-6 font-inter text-sm text-white transition-all hover:scale-105 hover:bg-[#2658AB]/90 sm:w-auto'
          >
            Try Again
          </button>
          <Link
            href='/'
            className='inline-flex h-10 w-full items-center justify-center rounded-[12px] border border-gray-300 bg-white px-6 font-inter text-sm text-gray-700 transition-all hover:scale-105 hover:bg-gray-50 sm:w-auto'
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}