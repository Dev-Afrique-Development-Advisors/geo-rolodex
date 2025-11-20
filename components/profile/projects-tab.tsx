'use client';

import { FolderOpen } from 'lucide-react';
import { ProjectCard } from './project-card';
import { type Project } from '@/lib/api';

interface ProjectsTabProps {
  projects: Project[];
}

export function ProjectsTab({ projects }: ProjectsTabProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className='space-y-4'>
        <div>
          <p className='mb-4 text-xl font-semibold'>Projects</p>
        </div>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold'>Projects</p>
        <div className='text-sm text-gray-500'>
          {projects.length} project{projects.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className='space-y-4'>
        {projects.map((project: Project, index: number) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectLoadingSkeleton() {
  return (
    <div className='space-y-4'>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='rounded-lg border bg-white p-4'>
          <div className='grid grid-cols-[64px_1fr] gap-4'>
            <div className='h-16 w-16 animate-pulse rounded-lg bg-gray-200'></div>
            <div className='space-y-2'>
              <div className='h-4 w-3/4 animate-pulse rounded bg-gray-200'></div>
              <div className='h-3 w-full animate-pulse rounded bg-gray-200'></div>
              <div className='h-3 w-1/2 animate-pulse rounded bg-gray-200'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-16'>
      <div className='relative mb-6'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-blue-100'>
          <FolderOpen className='h-12 w-12 text-gray-400' />
        </div>
      </div>

      <h3 className='mb-2 text-xl font-semibold text-gray-900'>
        No Projects Found
      </h3>

      <p className='mb-8 max-w-md text-wrap break-words text-center text-gray-500'>
        This company hasn&apos;t added any projects or use cases yet.
      </p>
    </div>
  );
}

