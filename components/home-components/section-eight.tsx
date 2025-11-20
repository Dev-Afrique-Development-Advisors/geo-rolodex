import Image from 'next/image';

const SectionEight = () => {
  return (
    <section className='bg-[url(/new-eight.png)] bg-cover bg-no-repeat pb-60 pt-20 text-center'>
      <h2 className='mt-10 text-4xl font-bold text-[#111827]'>Start Simple</h2>
      <p className='pt-4 font-inter text-base font-light text-[#111827]'>
        Easy and Efficient Validation Process. We have streamlined onboarding to
        save your time
      </p>

      <div className='container mx-auto mt-10 flex flex-col justify-center md:flex-row'>
        <div className='w-full rounded-lg border border-[#1B3C8E] bg-white p-5 text-left md:w-64 lg:w-72'>
          <div className='relative h-14 w-14'>
            <Image
              src='/icons/imtwo.png'
              alt='Verify information icon'
              width={56}
              height={56}
            />
          </div>
          <div className='mb-2 mt-4'>
            <p className='font-Inter text-2xl font-bold text-[#12141D]'>
              Verify Basic Information
            </p>
          </div>
          <div>
            <p className='font-Inter text-sm font-light text-[#12141D]'>
              Confirm your organization&apos;s contact and location details
            </p>
          </div>
        </div>
        <div className='mt-10 hidden h-20 px-4 md:hidden lg:block'>
          <Image
            src='/icons/blue-pointer-down.png'
            alt='Pointer arrow'
            width={80}
            height={80}
          />
        </div>
        <div className='relative top-0 w-full rounded-lg border border-[#1B3C8E] bg-white p-5 text-left md:top-16 md:w-64 lg:top-16 lg:w-72'>
          <div className='relative h-14 w-14'>
            <Image
              src='/share.png'
              alt='Share icon'
              width={56}
              height={56}
            />
          </div>
          <div className='mb-2 mt-4'>
            <p className='font-Inter text-2xl font-bold text-[#12141D]'>
              Update your focus
            </p>
          </div>
          <div>
            <p className='font-Inter text-sm font-light text-[#12141D]'>
              Validate your geospatial expertise areas
            </p>
          </div>
        </div>
        <div className='mt-10 hidden h-20 px-4 md:hidden lg:block'>
          <Image
            src='/icons/blue-pointer-up.png'
            alt='Pointer arrow'
            width={80}
            height={80}
          />
        </div>
        <div className='w-full rounded-lg border border-[#1B3C8E] bg-white p-5 text-left md:w-64 lg:w-72'>
          <div className='relative h-14 w-14'>
            <Image
              src='/icons/imthree.png'
              alt='Share use cases icon'
              width={56}
              height={56}
            />
          </div>
          <div className='mb-2 mt-4'>
            <p className='font-Inter text-2xl font-bold text-[#12141D]'>
              Share Use Cases
            </p>
          </div>
          <div>
            <p className='font-Inter text-sm font-light text-[#12141D]'>
              Highlight impactful projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;

