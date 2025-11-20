import Image from 'next/image';
import { cn } from '@/lib/utils';

const data = [
  {
    id: 1,
    title: 'Innovative web-based solution',
    text: 'Designed for identifying, analyzing, and engaging key stakeholders across sectors including public health, agriculture, environmental management, energy, and public policy.'
  },
  {
    id: 2,
    title: 'Directory and collaboration hub',
    text: 'Enhancing visibility and coordination within the geospatial community in low- and middle-income countries. By spotlighting who is active and where, Geo-Rolodex bridges communication gaps, surfaces innovative work, and facilitates strategic connections for funders, implementers, and policymakers. '
  },
  {
    id: 3,
    title: 'Interactive mapping tools and verified data',
    text: 'Effectively connect you with experienced geospatial partners.'
  }
];

const SectionTwo = () => {
  return (
    <section className='relative bg-white py-10 lg:pb-36 lg:pt-28'>
      <div className='absolute right-0 hidden h-[600px] w-2/4 lg:block'>
        <div className='relative ml-auto flex h-full w-[80%] items-center justify-end'>
          <Image src='/spiral.svg' alt='Spiral decoration' fill className='object-cover' />
        </div>
      </div>
      <div className='container mx-auto grid w-full lg:w-full'>
        <div className='w-full max-w-[622px]'>
          <p className='font-inter text-2xl font-bold text-black lg:text-4xl'>
            Comprehensive <br className='hidden lg:block' /> Geospatial
            Stakeholder Mapping
          </p>
          <div className='mt-8'>
            {data?.map((item) => (
              <div
                className={cn(
                  `flex h-fit border-l-4 border-[#2658AB] pl-6`,
                  item.id === 1 ? 'border-[#2658AB]' : 'border-[#F2F4F7]'
                )}
                key={item.id}
              >
                <div className='py-4'>
                  <p className='font-inter text-lg font-medium text-[#101828] lg:text-xl'>
                    {item.title}
                  </p>
                  <p className='mt-1 font-inter text-sm leading-9 text-[#667085] lg:mt-2 lg:text-[16px]'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

