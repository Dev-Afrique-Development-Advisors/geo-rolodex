'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AboutTab } from './about-tab';
import { ContactTab } from './contact-tab';
import { MediaTab } from './media-tab';
import { ProjectsTab } from './projects-tab';
import type { Organisation, Project } from '@/lib/api';
import { Icons } from '@/components/icons';

type TabType = 'about' | 'contact' | 'media' | 'projects';

interface ProfilePageProps {
  data: {organisation: Organisation; projects: Project[]};
}

export default function ProfilePage({ data: { organisation, projects } }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto max-w-4xl px-4 py-8'>
        {/* Header */}
        <div className='mb-6 rounded-lg border bg-white p-6 shadow-sm'>
          <div className='flex items-start gap-4'>
            {organisation?.logo ? (
              <div className='relative h-16 w-16 overflow-hidden rounded-lg border'>
                <Image
                  src={organisation.logo}
                  alt={`${organisation.name} logo`}
                  fill
                  className='object-contain'
                  sizes='64px'
                />
              </div>
            ) : (
              <div className='flex h-16 w-16 items-center justify-center rounded-lg bg-muted text-2xl font-semibold'>
                {organisation?.name?.charAt(0)}
              </div>
            )}
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-bold text-gray-900'>{organisation?.name}</h1>
                {organisation?.emailVerified && <Icons.verified />}
              </div>
              {organisation?.headOfficeLocation && (
                <p className='mt-1 text-sm text-muted-foreground'>
                  {organisation.headOfficeLocation}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='mb-4 border-b'>
          <div className='flex overflow-x-auto'>
            {['About', 'Contact', 'Media', 'Projects'].map((tab) => {
              const tabKey = tab.toLowerCase().replace(/\s+/g, '') as TabType;
              return (
                <Button
                  key={tab}
                  variant='ghost'
                  className={cn(
                    'rounded-none px-4 py-2 text-sm font-medium',
                    activeTab === tabKey
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {tab}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className='rounded-lg border bg-white p-6'>
          {activeTab === 'about' && <AboutTab data={organisation} />}
          {activeTab === 'contact' && <ContactTab data={organisation} />}
          {activeTab === 'media' && <MediaTab data={organisation} />}
          {activeTab === 'projects' && <ProjectsTab projects={projects} />}
        </div>
      </div>
    </div>
  );
}

