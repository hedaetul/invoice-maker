import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useInvoiceContext } from '../context/invoiceContext';
import InvoiceDetails from './invoiceDetails';
import InvoiceSummary from './invoiceSummary';
import ItemList from './itemList';

const itemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  rate: z.coerce.number().min(0, 'Rate must be a positive number'),
});

const invoiceSchema = z.object({
  logo: z.instanceof(File).nullable(),
  invoiceNo: z.coerce.number().min(1, 'Invoice number is required'),
  billTo: z.string().min(1, 'Bill to is required'),
  date: z.string().min(1, 'Date is required'),
  paymentTerms: z.string().optional(),
  poNumber: z.string().optional(),
  items: z.array(itemSchema),
  notes: z.string().optional(),
  subtotal: z.coerce.number().min(1, 'Subtotal must be greater than 1'),
  discount: z.coerce.number(),
  shipping: z.coerce.number(),
  amountPaid: z.coerce.number(),
  balanceDue: z.coerce.number(),
  currency: z.string().optional(),
  termsAndConditions: z.string().optional(),
});

export type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const InvoiceForm: React.FC = () => {
  const { setInvoiceData } = useInvoiceContext();
  const router = useRouter();

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      logo: null,
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

  const onSubmit = (data: InvoiceFormValues) => {
    setInvoiceData(data);
    router.push('/invoice');
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InvoiceDetails control={control} errors={formState.errors} />

          <ItemList
            fields={fields}
            control={control}
            formState={formState}
            remove={remove}
            append={append}
          />

          <InvoiceSummary control={control} errors={formState.errors} />
          <div className='w-full flex justify-end items-end mt-4'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InvoiceForm;
