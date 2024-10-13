'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useInvoiceContext } from '../context/invoiceContext';
import { InvoiceFields } from './invoiceFields';
import { ItemFields } from './itemFields';
import LogoField from './logoField';
import { PaymentFields } from './paymentFields';

// Define the validation schema using Zod
const invoiceSchema = z.object({
  logo: z.instanceof(File),
  invoiceNo: z.coerce.number().min(1, 'Invoice number is required'),
  billTo: z.string().min(1, 'Bill to is required'),
  date: z.string().min(1, 'Date is required'),
  paymentTerms: z.string().optional(),
  poNumber: z.string().optional(),
  items: z.array(
    z.object({
      description: z.string().min(1, 'Description is required'),
      quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
      rate: z.coerce.number().min(0, 'Rate must be a positive number'),
    })
  ),
  notes: z.string().optional(),
  subtotal: z.coerce.number().min(1, 'Subtotal must be greater than 1'),
  discount: z.coerce.number(),
  shipping: z.coerce.number(),
  termsAndConditions: z.string().optional(),
  amountPaid: z.coerce.number(),
  balanceDue: z.coerce.number(),
  currency: z.string().optional(),
});

export type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const InvoiceForm: React.FC = () => {
  const { setInvoiceData } = useInvoiceContext();
  const router = useRouter();

  const form = useForm<InvoiceFormValues>({
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

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: InvoiceFormValues) => {
    setInvoiceData(data);
    router.push('/invoice');
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LogoField
            control={form.control}
            name='logo'
            type='file'
            label='Upload Your Logo'
            placeholder='+ Add Your Logo'
            error={form.formState.errors.logo?.message}
          />

          <InvoiceFields control={form.control} errors={errors} />
          <ItemFields control={form.control} errors={errors} />
          <PaymentFields control={form.control} errors={errors} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default InvoiceForm;
