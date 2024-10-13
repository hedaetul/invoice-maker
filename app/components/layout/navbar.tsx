'use client';

import Logo from '@/app/dist/logo.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className='bg-white w-full shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Left Section: Logo and Navigation Links */}
        <div className='flex items-center space-x-8'>
          <Image src={Logo} alt='Logo' width={100} height={100} />
          <div className='flex space-x-6'>
            <Link href='/' className='text-gray-800 hover:text-green-500'>
              Help
            </Link>
            <Link href='/about' className='text-gray-800 hover:text-green-500'>
              History
            </Link>
            <Link
              href='/contact'
              className='text-gray-800 hover:text-green-500'
            >
              Invoicing Guide
            </Link>
          </div>
        </div>

        {/* Right Section: Sign Up, Login, and Theme Changer */}
        <div className='flex items-center space-x-6'>
          <Button variant='outline' className='border-none hover:none'>
            {isDark ? <FaMoon /> : <FiSun />}
          </Button>
          <Link href='/signup'>
            <Button>Sign up</Button>
          </Link>
          <Link href='/login'>
            <Button variant='secondary'>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
