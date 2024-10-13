import { Control, FieldErrors } from 'react-hook-form';
import InvoiceFormField from './invoiceFormField';
import { InvoiceFormValues } from './invoiceForm';

interface InvoiceFieldsProps {
  control: Control<InvoiceFormValues>;
  errors: FieldErrors<InvoiceFormValues>;
}

export const InvoiceFields: React.FC<InvoiceFieldsProps> = ({ control, errors }) => {
  return (
    <>
      <InvoiceFormField
        control={control}
        type='number'
        name='invoiceNo'
        label='Invoice No'
        placeholder='Invoice No.'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='text'
        name='billTo'
        label='Bill To'
        placeholder='Bill To...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='date'
        name='date'
        label='Date'
        placeholder='Invoice issue date...'
        errors={errors}
      />
      <InvoiceFormField
        control={control}
        type='number'
        name='poNumber'
        label='Phone Number'
        placeholder='Phone Number...'
        errors={errors}
      />
    </>
  );
};
