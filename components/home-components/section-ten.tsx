import Image from 'next/image';

const SectionTen = () => {
  return (
    <section className='grid items-center bg-[#070D27] py-5 lg:grid-cols-[1fr_2fr]'>
      <div className='pl-4 lg:pl-14'>
        <div className='max-w-sm space-y-10 pl-10 lg:space-y-20'>
          <div>
            <h2 className='text-2xl font-extrabold text-white lg:text-5xl'>
              500+
            </h2>
            <p className='text-base text-white'>
              Stakeholder organizations primarily use geospatial technology for
              service delivery in low and middle-income countries.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-extrabold text-white lg:text-5xl'>
              600+
            </h2>
            <p className='text-base text-white'>
              Documented historical projects across diverse sectors.
            </p>
          </div>
        </div>
      </div>
      <div className='relative flex w-full h-[400px] lg:h-[600px]'>
        <Image
          src='/World.png'
          alt='World map visualization'
          fill
          className='object-contain'
          sizes='(max-width: 1024px) 100vw, 66vw'
        />
      </div>
    </section>
  );
};

export default SectionTen;

