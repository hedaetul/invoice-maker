import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-white w-full shadow-md p-4'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-gray-800 text-lg'>Invoicer</h1>
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
