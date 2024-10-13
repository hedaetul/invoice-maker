import { Control, FieldErrors } from 'react-hook-form';
import InvoiceFormField from './invoiceFormField';
import { InvoiceFormValues } from './invoiceForm';

interface PaymentFieldsProps {
  control: Control<InvoiceFormValues>;
  errors: FieldErrors<InvoiceFormValues>;
}

export const PaymentFields: React.FC<PaymentFieldsProps> = ({ control, errors }) => {
  return (
    <>
      <InvoiceFormField
        control={control}
        type='number'
        name='subtotal'
        label='Subtotal'
        placeholder='Subtotal'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='number'
        name='discount'
        label='Discount'
        placeholder='Discount...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='number'
        name='shipping'
        label='Shipping'
        placeholder='Shipping charge...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='number'
        name='amountPaid'
        label='Amount Paid'
        placeholder='Amount already paid...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='number'
        name='balanceDue'
        label='Balance Due'
        placeholder='Your balance due...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='text'
        name='currency'
        label='Currency'
        placeholder='Currency...'
        errors={errors}
      />
    </>
  );
};
import { type } from 'os';
import { FC } from 'react';
