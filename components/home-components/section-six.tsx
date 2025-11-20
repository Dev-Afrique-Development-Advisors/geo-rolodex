import Image from 'next/image';

const data = [
  {
    id: 1,
    text: 'Interactive mapping'
  },
  {
    id: 2,
    text: 'Easy navigation'
  },
  {
    id: 3,
    text: 'Dynamic filters'
  },
  {
    id: 4,
    text: 'Detailed organizational insights'
  }
];

const SectionSix = () => {
  return (
    <section className='bg-[#0F172A]'>
      <div className='container mx-auto pt-20'>
        <p className='font-inter text-2xl font-bold text-white lg:text-4xl'>
          Platform Features
        </p>

        <div className='mt-5 grid gap-4 md:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-12'>
          {data?.map((item) => (
            <div
              className='flex items-center gap-4 rounded-lg bg-[#F3F4F6] px-4 py-4 lg:w-full'
              key={item.id}
            >
              <div className='h-3 w-3 rounded-full bg-[#2658AB]' />
              <p className='flex-1 text-nowrap text-base font-semibold text-[#38404A]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className='relative h-[250px] w-full md:h-[400px] lg:h-[600px]'>
          <Image
            src='/map-dashboard.png'
            alt='Map dashboard interface'
            fill
            className='object-cover object-top lg:mt-10'
            sizes='100vw'
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;

