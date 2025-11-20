import Link from 'next/link';
import Image from 'next/image';
import { IoLogoYoutube } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-[#14171F]'>
      <div className='container mx-auto py-24 text-white' id='footer'>
        <div className='grid justify-between gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4'>
          <div className='space-y-5'>
            <div className='relative h-10 w-44'>
              <Image
                src='/icons/footer-logo.svg'
                alt='Geo-Rolodex Logo'
                width={176}
                height={40}
                className='object-contain'
              />
            </div>

            <p className='w-full font-inter text-[#DDDDDE]'>
              Efficiently map and analyze stakeholders in minutes.
            </p>
            <div className='flex gap-2'>
              <div className='rounded-full bg-[#141823] p-3'>
                <IoLogoYoutube className='h-5 w-5' />
              </div>
              <div className='rounded-full bg-[#141823] p-3'>
                <FaLinkedinIn className='h-5 w-5' />
              </div>
              <div className='rounded-full bg-[#141823] p-3'>
                <FaXTwitter className='h-5 w-5' />
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-4 text-gray-300 lg:items-center'>
            <p className='font-bold text-white'>Resources</p>
            <p>
              <a
                href='https://stakeholder-map.nyc3.cdn.digitaloceanspaces.com/Geo-Rolodex%20User%20Guide.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer hover:underline'
              >
                User Guide
              </a>
            </p>
          </div>
          <div className='space-y-4 text-gray-300'>
            <p className='font-bold text-white'>Legal</p>
            <p>
              <Link
                href='https://policyvault.africa/terms-of-service/'
                target='_blank'
              >
                Terms of Service
              </Link>
            </p>
            <p>
              <Link
                href='https://policyvault.africa/privacy-policy/'
                target='_blank'
              >
                Privacy Policy / GDPR
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className='border-t border-[#272C39] py-8'>
        <p className='text-center text-sm text-gray-300'>
          © 2025 Geo-Rolodex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

