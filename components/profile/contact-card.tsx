'use client';

import { useState } from 'react';
import { ChevronDown, Mail, Phone, User } from 'lucide-react';
import { Icons } from '@/components/icons';

interface User {
  organizationName?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  linkedInUrl?: string;
  companyBio?: string;
  bio?: string;
}

interface ContactCardProps {
  user?: User;
}

const ShortenName = ({ name }: { name?: string }) => {
  if (!name) return null;

  const names = name.split(' ');
  return (
    <>
      {names[0]?.[0]}
      {names[1]?.[0]}
    </>
  );
};

const ContactCard = ({ user }: ContactCardProps) => {
  const [showBio, setShowBio] = useState(false);

  const hasContactInfo =
    user &&
    (user.organizationName ||
      user.name ||
      user.email ||
      user.phoneNumber ||
      user.linkedInUrl ||
      user.companyBio ||
      user.bio);

  if (!hasContactInfo) {
    return <ContactCardEmpty />;
  }

  const displayName = user.organizationName || user.name;
  const bio = user.bio || user.companyBio;
  const hasContactDetails = user.email || user.phoneNumber;

  return (
    <div className='space-y-3'>
      <div className='flex items-start gap-3 text-wrap break-words'>
        <div className='relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-200'>
          <span className='text-sm font-semibold text-blue-700'>
            <ShortenName name={displayName} />
          </span>
        </div>

        <div className='min-w-0 flex-1 space-y-1'>
          {displayName && (
            <div className='flex items-center gap-2'>
              <h4 className='truncate text-sm font-semibold text-gray-900'>
                {displayName}
              </h4>
              {user.linkedInUrl && (
                <a
                  href={user.linkedInUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-shrink-0 text-wrap break-words text-blue-600 transition-colors hover:text-blue-700'
                  title='View LinkedIn Profile'
                >
                  <Icons.linkedIn />
                </a>
              )}
            </div>
          )}

          {hasContactDetails && (
            <div className='space-y-1'>
              {user.email && (
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                  <Mail className='h-3 w-3 text-gray-400' />
                  <a
                    href={`mailto:${user.email}`}
                    className='truncate text-blue-600 hover:text-blue-700 hover:underline'
                  >
                    {user.email}
                  </a>
                </div>
              )}
              {user.phoneNumber && (
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                  <Phone className='h-3 w-3 text-gray-400' />
                  <a
                    href={`tel:${user.phoneNumber}`}
                    className='text-blue-600 hover:text-blue-700 hover:underline'
                  >
                    {user.phoneNumber}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {bio && (
        <div className='space-y-2 text-wrap break-words'>
          {showBio && (
            <div className='rounded-lg border border-gray-100 bg-gray-50 p-3'>
              <p className='text-xs leading-relaxed text-gray-700'>{bio}</p>
            </div>
          )}
          <button
            onClick={() => setShowBio(!showBio)}
            className='mx-auto flex items-center gap-1 text-xs text-blue-600 transition-colors hover:text-blue-700'
          >
            {showBio ? 'Hide Bio' : 'Show Bio'}
            <ChevronDown
              size={12}
              className={`transition-transform duration-200 ${showBio ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

function ContactCardEmpty() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <div className='text-center'>
        <div className='mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
          <User className='h-8 w-8 text-gray-400' />
        </div>
        <p className='mb-2 text-sm text-gray-500'>No contact information</p>
        <p className='text-xs text-gray-400'>
          Contact details will appear here when available
        </p>
      </div>
    </div>
  );
}

