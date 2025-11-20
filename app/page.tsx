import Navbar from '@/components/home-navbar';
import HeroSection from '@/components/home-components/hero-section';
import SectionTwo from '@/components/home-components/section-two';
import SectionThree from '@/components/home-components/section-three';
import SectionFour from '@/components/home-components/section-four';
import SectionFive from '@/components/home-components/section-five';
import SectionTen from '@/components/home-components/section-ten';
import SectionEight from '@/components/home-components/section-eight';
import SectionSix from '@/components/home-components/section-six';
import FAQ from '@/components/home-components/faq';
import SectionEleven from '@/components/home-components/section-eleven';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionTen />
      <SectionEight />
      <SectionSix />
      <section
        className='mt-40 scroll-m-10 border-[0.4px] bg-[url("/section-bg.png")] bg-cover px-5 pb-28 pt-10'
        id='faq'
      >
        <FAQ />
      </section>
      <SectionEleven />
      <Footer />
    </div>
  );
}

