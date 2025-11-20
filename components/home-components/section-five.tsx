import Image from 'next/image';

const data = [
  {
    id: 1,
    text: 'Access advanced mapping tools for insightful landscape exploration'
  },
  {
    id: 2,
    text: 'Be discoverable by funders, policymakers, and potential partners'
  },
  {
    id: 3,
    text: 'Strengthen the geospatial ecosystem through collaboration'
  },
  {
    id: 4,
    text: 'Join an exclusive, invitation-only professional network'
  },
  {
    id: 5,
    text: 'Ensure accurate representation of your organization in a curated sector-wide directory'
  },
  {
    id: 6,
    text: 'Gain visibility within the growing geospatial ecosystem across low- and middle-income countries'
  },
  {
    id: 7,
    text: 'Gain eligibility for Umbrella Fund consideration (supporting health and development innovations)'
  }
];

const SectionFive = () => {
  return (
    <section className='bg-white pb-40 pt-10 lg:pt-20'>
      <div className='container mx-auto flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2 lg:gap-24'>
        <div className='flex w-full flex-col justify-center'>
          <p className='mt-4 font-inter text-2xl font-semibold text-[#111827]'>
            Benefits of Joining Geo-Rolodex
          </p>

          <div className='mt-4 space-y-4'>
            {data?.map((item) => (
              <div
                className='flex items-center gap-3 rounded-xl bg-[#F3F4F6] p-4 lg:gap-6'
                key={item.id}
              >
                <div className='h-3 w-3 rounded-full bg-[#2658AB]' />
                <p className='flex-1 font-inter font-semibold text-[#38404A]'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex h-full items-center'>
          <div className='relative h-[300px] w-full lg:h-[500px]'>
            <Image
              src='/imfive.png'
              alt='Benefits illustration'
              fill
              className='object-contain'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;

