import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/dist/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-white w-full shadow-md p-4'>
      <div className='container mx-auto flex justify-between'>
        <Image src={Logo} alt='Logo' width={100} height={100} />
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-gray-800 hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-gray-800 hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className='text-gray-800 hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
