import { Control } from 'react-hook-form';
import InvoiceFormField from './invoiceFormField';
import LogoField from './logoField';

const InvoiceDetails: React.FC<{ control: Control<any>; errors: any }> = ({
  control,
  errors,
}) => {
  return (
    <div className=''>
      <div className=' flex  mb-4'>
        <LogoField
          control={control}
          type='file'
          name='logo'
          label='Add Your Logo'
          placeholder='Logo...'
          errors={errors}
        />

        <InvoiceFormField
          control={control}
          type='number'
          name='invoiceNo'
          label='Invoice No.'
          placeholder='Invoice No.'
          errors={errors}
        />
      </div>

      <div className='grid grid-cols-3 gap-64 mb-4'>
        <div className='col-span-2'>
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
            type='text'
            name='paymentTerms'
            label='Payment Terms'
            placeholder='Payment Terms...'
            errors={errors}
          />
        </div>

        <div className='col-span-1'>
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
            type='text'
            name='poNumber'
            label='Phone Number'
            placeholder='Phone Number...'
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
