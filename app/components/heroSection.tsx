'use client';

import InvoiceForm from './invoiceForm';
import Footer from './layout/footer';
import Navbar from './layout/navbar';

const HeroSection = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='container flex-grow p-4'>
        <h1 className='text-4xl font-bold mb-4'>
          Welcome to the Invoicer Generator
        </h1>
        <p className='mt-4 mb-8'>Generate your invoices easily and efficiently.</p>
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Create Your Invoice</h2>
          <InvoiceForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
