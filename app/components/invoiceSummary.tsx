import { Control } from 'react-hook-form';
import InvoiceFormField from './invoiceFormField';

const InvoiceSummary: React.FC<{ control: Control<any>; errors: any }> = ({
  control,
  errors,
}) => {
  return (
    <div className='grid grid-cols-3 gap-64'>
      <div className='col-span-2'>
        <InvoiceFormField
          control={control}
          type='text'
          name='notes'
          label='Notes'
          placeholder='Notes- any relevant information not already covered...'
          errors={errors}
        />
        <InvoiceFormField
          control={control}
          type='text'
          name='termsAndConditions'
          label='Terms And Conditions'
          placeholder='Terms And Conditions...'
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
      </div>

      <div className='col-span-1'>
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
          label='Shipping Charge'
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
      </div>
    </div>
  );
};

export default InvoiceSummary;
