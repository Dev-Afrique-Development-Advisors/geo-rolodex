'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-[#131a21] py-4'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            src='/images/new-logo.svg'
            alt='Geo-Rolodex Logo'
            width={208}
            height={28}
            className='relative z-10 mx-auto h-6 w-52 md:h-7 md:w-52 lg:w-52'
            priority
          />
        </div>

        <div className='hidden items-center gap-4 md:hidden lg:flex'>
          <ul className='hidden items-center gap-10 font-inter font-medium text-[#fff] md:flex'>
            <Link href='#about-us' className='cursor-pointer'>
              About Us
            </Link>
            <Link
              href='#'
              onClick={() =>
                window.open(
                  'https://stakeholder-map.nyc3.cdn.digitaloceanspaces.com/Geo-Rolodex%20User%20Guide.pdf',
                  '_blank'
                )
              }
              className='cursor-pointer'
            >
              User Guide
            </Link>
            <Link href='#' className='cursor-pointer'>
              Request Demo
            </Link>
          </ul>
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
            className='inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-transparent shadow-sm hover:bg-primary/10 px-4 py-2 font-Inter h-[44px] w-[140px] rounded-[12px] border border-[#fff]/50 text-[#fff]'
          >
            Login
          </Link>
        </div>

        <div className='block text-white md:block lg:hidden'>
          <Menu
            size={24}
            className='cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div className='bg-dark absolute right-0 top-14 p-5'>
            <ul className='grid items-center gap-4 text-[#fff]'>
              <li>
                <Link
                  href='/about-us'
                  className='font-Inter cursor-pointer text-base'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  onClick={() =>
                    window.open(
                      'https://stakeholder-map.nyc3.cdn.digitaloceanspaces.com/Geo-Rolodex%20User%20Guide.pdf',
                      '_blank'
                    )
                  }
                  className='font-Inter cursor-pointer text-base'
                >
                  User Guide
                </Link>
              </li>
              <div className='flex items-center gap-2'>
                <Link
                  href='#'
                  className='font-Inter cursor-pointer text-base'
                >
                  Request Demo
                </Link>
                <ChevronDown />
              </div>
            </ul>
            <div className='mt-5 flex items-center gap-4'>
              <Link
                href='/sign-in'
                className='inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-transparent shadow-sm hover:bg-primary/10 px-4 py-2 font-Inter h-[44px] w-[140px] rounded-md border border-[#fff] text-[#fff]'
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

