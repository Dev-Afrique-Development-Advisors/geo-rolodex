import ContactCard from './contact-card';
import type { Organisation } from '@/lib/api';

type Props = {
  data: Organisation;
};

export function ContactTab({ data }: Props) {
  return (
    <div className='py-4'>
      <div className='rounded bg-[#C8EBFE] p-4'>
        <p className='mb-2 text-sm font-semibold'>Primary contact</p>
        <ContactCard user={data} />
      </div>

      {data.contactPerson && (
        <div className='my-4 rounded bg-white p-4'>
          <p className='mb-2 text-sm font-semibold'>Contact Person details</p>
          <ContactCard user={data.contactPerson} />
        </div>
      )}
    </div>
  );
}

