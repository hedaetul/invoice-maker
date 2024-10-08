'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const InvoiceDetails = ({
  control,
  formState,
}: {
  control: any;
  formState: any;
}) => {

  return (
    <>
      <FormField
        control={control}
        name='logo'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Logo URL</FormLabel>
            <FormControl>
              <Input placeholder='Logo URL' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.logo?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='invoiceNo'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Invoice Number</FormLabel>
            <FormControl>
              <Input placeholder='Invoice Number' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.invoiceNo?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='billTo'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bill To</FormLabel>
            <FormControl>
              <Input placeholder='Bill To' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.billTo?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='date'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date</FormLabel>
            <FormControl>
              <Input type='date' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.date?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='paymentTerms'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Terms</FormLabel>
            <FormControl>
              <Input placeholder='Payment Terms' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.paymentTerms?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='poNumber'
        render={({ field }) => (
          <FormItem>
            <FormLabel>PO Number</FormLabel>
            <FormControl>
              <Input placeholder='PO Number' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.poNumber?.message}</FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default InvoiceDetails;
