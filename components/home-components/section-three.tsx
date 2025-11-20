import Image from 'next/image';

const data = [
  {
    id: 1,
    text: 'Overlapping funding due to limited ecosystem visibility'
  },
  {
    id: 2,
    text: 'Difficulty identifying complementary skills and partners'
  },
  {
    id: 3,
    text: 'Fragmented knowledge sharing across regions and sectors'
  }
];

const SectionThree = () => {
  return (
    <section className='bg-[#F9FAFC] py-10 md:py-20 lg:py-28'>
      <div className='container grid gap-9 lg:grid-cols-2'>
        <div className='relative h-[250px] w-full md:h-[350px] lg:h-[500px]'>
          <Image
            src='/dashboard-img.png'
            alt='Dashboard preview'
            fill
            className='object-cover'
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
        </div>

        <div className='flex w-full flex-col justify-center'>
          <p className='font-inter text-2xl font-semibold text-[#111827]'>
            Addressing Critical Gaps in Geospatial Collaboration
          </p>
          <p className='mt-4 font-inter text-[14px] leading-7 text-[#38404A] lg:mt-8'>
            In 2022, Dev-Afrique, in partnership with the Gates Foundation,
            conducted Value Pipeline Assessments in Nigeria and the Democratic
            Republic of Congo. The results showed that over 50 organizations
            were doing valuable geospatial work, but they were all working in
            silos.
          </p>

          <div className='mt-4 space-y-4 lg:mt-8'>
            {data?.map((item) => (
              <div
                className='flex items-center gap-3 rounded-xl bg-[#F3F4F6] px-4 py-6 lg:gap-6'
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
      </div>
    </section>
  );
};

export default SectionThree;

