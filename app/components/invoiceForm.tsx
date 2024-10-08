'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import AdditionalDetails from './additionalDetails';
import InvoiceDetails from './invoiceDetails';
import { useInvoiceContext } from '../context/invoiceContext';
import { dataType } from '../types/dataTypes';
import ItemList from './itemList';

const itemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  rate: z.number().min(0, 'Rate must be a positive number'),
});

const invoiceSchema = z.object({
  logo: z.string().optional(),
  invoiceNo: z.string().min(1, 'Invoice number is required'),
  billTo: z.string().min(1, 'Bill to is required'),
  date: z.string().min(1, 'Date is required'),
  paymentTerms: z.string().optional(),
  poNumber: z.string().optional(),
  items: z.array(itemSchema),
  notes: z.string().optional(),
  subtotal: z.string().min(0, 'Subtotal must be a positive number'),
  discount: z.string().min(0, 'Discount must be a positive number').optional(),
  shipping: z.string().min(0, 'Shipping must be a positive number').optional(),
  termsAndConditions: z.string().optional(),
  amountPaid: z
    .string()
    .min(0, 'Amount paid must be a positive number')
    .optional(),
  balanceDue: z
    .string()
    .min(0, 'Balance due must be a positive number')
    .optional(),
  currency: z.string().optional(),
});

const InvoiceForm: React.FC = () => {
  const { setInvoiceData } = useInvoiceContext(); 
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      logo: '',
      invoiceNo: '',
      billTo: '',
      date: '',
      paymentTerms: '',
      poNumber: '',
      items: [{ description: '', quantity: 1, rate: 0 }],
      notes: '',
      subtotal: '',
      discount: '',
      shipping: '',
      amountPaid: '',
      balanceDue: '',
      currency: '',
      termsAndConditions: '',
    },
  });

  const { control, handleSubmit, formState } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  // Remove event parameter from onSubmit, let React Hook Form handle it internally
  const onSubmit = (data: dataType) => {
    setInvoiceData(data); 
    router.push('/invoice');
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <InvoiceDetails control={control} formState={formState} />
        <ItemList
          fields={fields}
          control={control}
          formState={formState}
          remove={remove}
          append={append}
        />
        <AdditionalDetails control={control} formState={formState} />
        <Button type='submit'>Generate Invoice</Button> {/* Removed onClick handler */}
      </form>
    </Form>
  );
};

export default InvoiceForm;
