import { Button } from '@/components/ui/button';

const SectionEleven = () => {
  return (
    <section className='bg-[#F9FAFC] py-36'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-8'>
        <p className='font-jakarta text-4xl font-bold text-[#070D27]'>
          Join the Geospatial Movement Today
        </p>
        <p className='w-full max-w-2xl text-center font-jakarta leading-8'>
          Geo-Rolodex exists to elevate your work and improve the entire
          ecosystem. By joining, you help ensure the geospatial future in LMICs
          is visible, connected, and collaborative.
        </p>
        <Button className='h-14 w-52 rounded-[12px] bg-[#2B59FF] hover:scale-105 hover:bg-[#2B59FF] text-white'>
          Get Started Now
        </Button>

        <p className='font-jakarta text-sm text-[#070D27]'>
          Together, we are shaping the future of the geospatial sector in LMICs.
        </p>
      </div>
    </section>
  );
};

export default SectionEleven;

