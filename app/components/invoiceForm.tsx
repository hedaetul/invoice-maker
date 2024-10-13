'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useInvoiceContext } from '../context/invoiceContext';
import InvoiceFormField from './invoiceFormField';
import ItemList from './itemList';
import LogoField from './logoField';

const itemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  rate: z.coerce.number().min(0, 'Rate must be a positive number'),
});

const invoiceSchema = z.object({
  logo: z.instanceof(File),
  invoiceNo: z.coerce.number().min(1, 'Invoice number is required'),
  billTo: z.string().min(1, 'Bill to is required'),
  date: z.string().min(1, 'Date is required'),
  paymentTerms: z.string().optional(),
  poNumber: z.string().optional(),
  items: z.array(itemSchema),
  notes: z.string().optional(),
  subtotal: z.coerce.number().min(1, 'Subtotal must be greater then 1'),
  discount: z.coerce.number(),
  shipping: z.coerce.number(),
  termsAndConditions: z.string().optional(),
  amountPaid: z.coerce.number(),
  balanceDue: z.coerce.number(),
  currency: z.string().optional(),
});

export type invoiceFormValues = z.infer<typeof invoiceSchema>;

const InvoiceForm: React.FC = () => {
  const { setInvoiceData } = useInvoiceContext();
  const router = useRouter();

  const form = useForm<invoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      logo: undefined,
      invoiceNo: 1,
      billTo: '',
      date: '',
      paymentTerms: '',
      poNumber: '',
      items: [{ description: '', quantity: 1, rate: 0 }],
      notes: '',
      subtotal: 0,
      discount: 0,
      shipping: 0,
      amountPaid: 0,
      balanceDue: 0,
      currency: '',
      termsAndConditions: '',
    },
  });

  const { control, formState } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = (data: invoiceFormValues) => {
    setInvoiceData(data);
    router.push('/invoice');
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <LogoField
            control={control}
            type='file'
            name='logo'
            label='Logo'
            placeholder='Select your logo file'
            errors={formState.errors}
          />

          <InvoiceFormField
            control={control}
            type='number'
            name='invoiceNo'
            label='InvoiceNo'
            placeholder='Invoice No.'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='text'
            name='billTo'
            label='Bill To'
            placeholder='Bill To...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='date'
            name='date'
            label='Date'
            placeholder='Invoice issue date...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='poNumber'
            label='Phone Number'
            placeholder='Phone Number...'
            errors={formState.errors}
          />

          <ItemList
            fields={fields}
            control={control}
            formState={formState}
            remove={remove}
            append={append}
          />

          <InvoiceFormField
            control={control}
            type='text'
            name='notes'
            label='Notes'
            placeholder='You can write a notes...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='subtotal'
            label='Subtotal'
            placeholder='Subtotal'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='discount'
            label='Discount'
            placeholder='Discount...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='shipping'
            label='Shipping charge'
            placeholder='Shipping charge...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='amountPaid'
            label='Amount Paid'
            placeholder='Amount already paid...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name='balanceDue'
            label='Balance Due'
            placeholder='Your balance due...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='text'
            name='notes'
            label='Notes'
            placeholder='You can write a notes...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='text'
            name='currency'
            label='Currency'
            placeholder='Currency...'
            errors={formState.errors}
          />
          <InvoiceFormField
            control={control}
            type='text'
            name='termsAndConditions'
            label='Terms And Conditions'
            placeholder='Terms And Conditions...'
            errors={formState.errors}
          />
          <Button type='submit'>submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default InvoiceForm;
