import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-gray-800 dark:text-gray-200'>
          404
        </h1>
        <div className='mt-4'>
          <h2 className='text-3xl font-semibold text-gray-700 dark:text-gray-300'>
            Oops! Page Not Found
          </h2>
          <p className='mt-2 text-lg text-gray-600 dark:text-gray-400'>
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className='mt-8'>
          <Link
            href='/'
            className='inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          >
            <svg
              className='mr-2 h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className='mt-8 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400'>
          <Link href='mailto:support@invoice-maker.com?subject=404%20Page%20Support&body=Hello%20Support%20Team%2C%0A%0AI%20encountered%20a%20404%20error%20on%20your%20website.%20Could%20you%20please%20help%20me%20with%20this%3F%0A%0AThank%20you.'>
            Need help? Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}
