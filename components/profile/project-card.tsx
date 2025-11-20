import Image from 'next/image';
import { Calendar, FileImage } from 'lucide-react';
import type { Project } from '@/lib/api';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.media?.url && project.media.url !== '';

  return (
    <div className='group gap-5 rounded-lg border bg-white p-4 transition-shadow duration-200'>
      <div className='grid grid-cols-[64px_1fr] gap-4'>
        <div className='relative h-16 w-16 overflow-hidden rounded-lg border bg-gray-50'>
          {hasImage ? (
            <Image
              src={project.media?.url || '/placeholder.svg'}
              alt={`${project.title} project image`}
              fill
              className='object-cover'
              sizes='64px'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  target.nextElementSibling.classList.remove('hidden');
                }
              }}
            />
          ) : null}
          <div
            className={`${hasImage ? 'hidden' : ''} absolute inset-0 flex items-center justify-center`}
          >
            <FileImage className='h-6 w-6 text-gray-400' />
          </div>
        </div>

        <div className='flex min-w-0 flex-col justify-between space-y-1'>
          <div className='space-y-1'>
            <div className='flex items-start justify-between gap-2'>
              <h4 className='line-clamp-1 text-sm font-medium capitalize text-gray-900 transition-colors'>
                {project.title || 'Untitled Project'}
              </h4>
            </div>

            {project.summary && (
              <p className='line-clamp-2 text-sm capitalize leading-relaxed text-gray-600'>
                {project.summary}
              </p>
            )}
          </div>

          {project.timeline && (
            <div className='flex items-center gap-1 text-xs text-gray-500'>
              <Calendar className='h-3 w-3' />
              <span>{project.timeline}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

