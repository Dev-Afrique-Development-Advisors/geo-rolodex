'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Share2, Copy } from 'lucide-react';

interface MediaCardProps {
  style?: string;
  title?: string;
  text?: string;
  date?: string;
  imageUrl?: string;
}

export const MediaCard = ({
  style,
  title,
  text,
  date,
  imageUrl
}: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = () => {
    if (!text) return;
    try {
      if (navigator.share) {
        navigator.share({
          title: title || 'Shared content',
          text: text,
          url: text
        });
      } else {
        window.open(text, '_blank');
      }
    } catch (err) {
      console.error('Sharing failed', err);
    }
  };

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  if (!imageUrl) return null;

  return (
    <article
      className={`rounded-lg border border-gray-200 p-3 transition-shadow hover:shadow-md ${style}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-gray-200'>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title || 'Media content'}
            fill
            className='rounded-md object-cover object-top'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
      </div>

      {date && (
        <p className='mt-3 text-xs font-medium uppercase text-gray-500'>
          {date}
        </p>
      )}

      {title && (
        <h3 className='my-2 line-clamp-2 text-sm font-semibold'>{title}</h3>
      )}

      {(text || isHovered) && (
        <div className='mt-2 flex items-center justify-between gap-2'>
          {text && (
            <p className='line-clamp-1 flex-1 text-xs text-gray-600'>{text}</p>
          )}

          <div
            className={`flex items-center gap-2 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          >
            {text && (
              <>
                <button
                  onClick={handleShare}
                  aria-label='Share content'
                  className='p-1 text-gray-500 transition-colors hover:text-gray-700'
                >
                  <Share2 size={16} />
                </button>
                <button
                  onClick={handleCopy}
                  aria-label='Copy to clipboard'
                  className='p-1 text-gray-500 transition-colors hover:text-gray-700'
                >
                  <Copy size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

