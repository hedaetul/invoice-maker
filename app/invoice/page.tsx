'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInvoiceContext } from '../context/invoiceContext';

const Invoice: React.FC = () => {
  const { invoiceData } = useInvoiceContext();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (invoiceData?.logo) {
      const url = URL.createObjectURL(invoiceData.logo);
      setLogoUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [invoiceData]);

  if (!invoiceData) {
    return (
      <p className='text-center text-red-500'>
        No invoice data found. Please generate an invoice.
      </p>
    );
  }

  return (
    <div className='max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10'>
      <div className='flex justify-between items-center mb-8'>
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt='Logo'
            width={100}
            height={100}
            className='h-16 w-16 bg-gray-200 rounded-full'
          />
        ) : (
          <div className='h-16 w-16 bg-gray-200 rounded-full'>Logo</div>
        )}
        <h1 className='text-2xl font-bold text-gray-800'>Invoice</h1>
      </div>

      <div className='mb-4'>
        <p className='text-gray-600'>
          <span className='font-semibold'>Invoice Number:</span>{' '}
          {invoiceData.invoiceNo}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Bill To:</span> {invoiceData.billTo}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Date:</span> {invoiceData.date}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Payment Terms:</span>{' '}
          {invoiceData.paymentTerms || 'N/A'}
        </p>
      </div>

      <div className='mb-8'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>Items</h2>
        <table className='w-full text-left border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='p-2 border-b border-gray-300'>Description</th>
              <th className='p-2 border-b border-gray-300'>Quantity</th>
              <th className='p-2 border-b border-gray-300'>Rate</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item: any, index: number) => (
              <tr key={index}>
                <td className='p-2 border-b border-gray-300'>
                  {item.description}
                </td>
                <td className='p-2 border-b border-gray-300'>
                  {item.quantity}
                </td>
                <td className='p-2 border-b border-gray-300'>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mb-8'>
        <p className='text-gray-600'>
          <span className='font-semibold'>Subtotal:</span>{' '}
          {invoiceData.subtotal}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Discount:</span>{' '}
          {invoiceData.discount || 'N/A'}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Shipping:</span>{' '}
          {invoiceData.shipping || 'N/A'}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Amount Paid:</span>{' '}
          {invoiceData.amountPaid || 'N/A'}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Balance Due:</span>{' '}
          {invoiceData.balanceDue || 'N/A'}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Currency:</span>{' '}
          {invoiceData.currency || 'N/A'}
        </p>
      </div>

      <div className='mb-8'>
        <p className='text-gray-600'>
          <span className='font-semibold'>Notes:</span>{' '}
          {invoiceData.notes || 'N/A'}
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold'>Terms and Conditions:</span>{' '}
          {invoiceData.termsAndConditions || 'N/A'}
        </p>
      </div>

      <button
        onClick={() => window.print()}
        className='hidden-print bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
      >
        Print Invoice
      </button>
    </div>
  );
};

export default Invoice;
