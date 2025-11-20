import Link from 'next/link';
import { Icons } from '@/components/icons';

const HeroSection = () => {
  return (
    <div className='relative bg-[#131a21]'>
      <div className='bg-[url(/bgwave.png)] bg-cover bg-no-repeat'>
        <div className='container mx-auto h-full py-20 pb-72 text-center text-white'>
          <div className='space-y-8 py-10'>
            <h1 className='font-inter text-5xl font-bold'>
              <span className='text-[#3A98FF]'>Connecting</span> The Geospatial
              Ecosystem
            </h1>
            <p className='mx-auto max-w-2xl font-inter text-[16px] font-light leading-[32px] text-[#DADADA]'>
              Geo-Rolodex is a centralized platform to map, connect, and
              highlight organisations advancing geospatial work across sectors.
            </p>
          </div>

          <div className='mt-5 flex flex-col justify-center gap-4 lg:flex-row'>
            <Link
              href='/sign-in'
              className='text-md flex h-14 w-60 items-center justify-center rounded-[12px] bg-[#2658AB] hover:scale-105 hover:bg-[#2658AB]'
            >
              Login
            </Link>
            <a
              href='https://stakeholder-map.nyc3.cdn.digitaloceanspaces.com/Geo-Rolodex%20User%20Guide.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-md flex h-14 w-60 items-center justify-center rounded-[12px] border border-white/50 bg-transparent hover:scale-105'
            >
              Download User Guide
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex gap-4 pb-5'>
        <div className='space-y-1'>
          <p className='font-inter text-sm font-light text-[#DADADA]'>
            An Initiative By
          </p>
          <Icons.pvLogo />
        </div>
        <div className='h-16 border-r border-white/20' />

        <div className='space-y-1'>
          <p className='font-inter text-sm font-light text-[#DADADA]'>
            Funded By
          </p>
          <Icons.gatesLogo />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

