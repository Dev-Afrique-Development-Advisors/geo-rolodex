'use client';

import { Button } from '@/components/ui/button';

const SectionFour = () => {
  const downloadNaijaReport = () => {
    fetch('/nigerias-vp-report.pdf')
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Nigerias-vp-report';
        link.click();
        URL.revokeObjectURL(url);
      });
  };
  const downloadDrcReport = () => {
    fetch('/drc-vp-report.pdf')
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Drc-vp-report';
        link.click();
        URL.revokeObjectURL(url);
      });
  };

  return (
    <section className='bg-[#0F172A] py-12 pt-10 lg:pb-24 lg:pt-20'>
      <div className='container mx-auto w-full text-center'>
        <p className='w-full font-inter text-white'>
          Geo-Rolodex was developed as a direct response: a central, validated
          platform that improves coordination,{' '}
          <br className='hidden lg:block' />
          reduces duplication, and promotes targeted collaboration.
        </p>
        <div className='mt-9 flex w-full flex-wrap justify-center gap-5 lg:gap-8'>
          <Button
            className='h-14 rounded-[12px] bg-[#2658AB] ease-in-out hover:scale-105 hover:bg-[#2658AB] text-white'
            onClick={downloadNaijaReport}
          >
            Download Nigeria Report
          </Button>
          <Button
            className='h-14 rounded-[12px] border bg-transparent ease-in-out hover:scale-105 text-white'
            onClick={downloadDrcReport}
          >
            Download DRC Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

