import { MediaCard } from './media-card';
import { FileImage } from 'lucide-react';
import type { Organisation } from '@/lib/api';

type Props = {
  data: Organisation;
};

export function MediaTab({ data }: Props) {
  const media = data?.media;

  const EmptyState = () => (
    <div className='flex flex-col items-center justify-center px-4 py-16'>
      <div className='relative mb-6'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-green-100'>
          <FileImage className='h-12 w-12 text-gray-400' />
        </div>
      </div>

      <h3 className='mb-2 text-xl font-semibold text-gray-900'>
        No Media Found
      </h3>
    </div>
  );

  return (
    <div className='py-4'>
      <div>
        <p className='mb-4 text-xl font-semibold'>Relevant Media</p>
      </div>

      {!media || media.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='space-y-4'>
          {media.map((mediaItem, i) => {
            return (
              <MediaCard
                key={i}
                style={'bg-white'}
                title={mediaItem.name}
                text={mediaItem.description}
                imageUrl={mediaItem.url}
                date={undefined}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

