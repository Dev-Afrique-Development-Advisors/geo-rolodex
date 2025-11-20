import { Building2, Calendar, MapPin } from 'lucide-react';
import { TagList } from './tag-list';
import { InfoCard } from './info-card';
import type { Organisation } from '@/lib/api';

export interface AboutTabProps {
  data: Organisation;
}

export function AboutTab({ data }: AboutTabProps) {
  const hasContent =
    data.bio ||
    (data.officeLocations && data.officeLocations.length > 0) ||
    (data.paidStaffLocations && data.paidStaffLocations.length > 0) ||
    data.yearFounded ||
    data.website ||
    data.headOfficeLocation ||
    data.mission;

  if (!hasContent) {
    return <AboutEmptyState />;
  }

  return (
    <div className='flex w-full flex-col space-y-6'>
      {data.bio && (
        <div className='space-y-2'>
          <h3 className='font-medium'>Description</h3>
          <p className='text-wrap break-words text-sm leading-relaxed text-muted-foreground'>
            {data.bio}
          </p>
        </div>
      )}

      {data.mission && (
        <div className='space-y-2'>
          <h3 className='font-medium'>Mission</h3>
          <p className='text-wrap break-words text-sm leading-relaxed text-muted-foreground'>
            {data.mission}
          </p>
        </div>
      )}

      <TagList
        title='Operates in (geography)'
        items={data.officeLocations || []}
      />

      <TagList
        title='Locations with paid staff'
        items={data.paidStaffLocations || []}
      />

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {data.yearFounded && (
          <InfoCard
            title='Year founded'
            value={new Date(data.yearFounded).getFullYear()}
          />
        )}

        {data.website && (
          <InfoCard
            title='Website'
            value={data.website}
            href={data.website}
          />
        )}

        {data.headOfficeLocation && (
          <InfoCard title='Headquarters' value={data.headOfficeLocation} />
        )}
      </div>
    </div>
  );
}

function AboutEmptyState() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-16'>
      <div className='relative mb-6'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-100'>
          <Building2 className='h-12 w-12 text-gray-400' />
        </div>
      </div>

      <h3 className='mb-2 text-xl font-semibold text-gray-900'>
        No Company Information Available
      </h3>

      <p className='mb-8 max-w-md text-center text-gray-500'>
        Company details like description, locations, and other information will
        appear here once they&apos;re added to the profile.
      </p>
    </div>
  );
}

