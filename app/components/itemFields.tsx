import { Control, FieldErrors, useFieldArray } from 'react-hook-form';
import InvoiceFormField from './invoiceFormField';
import { InvoiceFormValues } from './invoiceForm';

interface ItemFieldsProps {
  control: Control<InvoiceFormValues>;
  errors: FieldErrors<InvoiceFormValues>;
}

export const ItemFields: React.FC<ItemFieldsProps> = ({ control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InvoiceFormField
            control={control}
            type='text'
            name={`items.${index}.description`}
            label='Description'
            placeholder='Item Description'
            errors={errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name={`items.${index}.quantity`}
            label='Quantity'
            placeholder='Quantity'
            errors={errors}
          />
          <InvoiceFormField
            control={control}
            type='number'
            name={`items.${index}.rate`}
            label='Rate'
            placeholder='Rate'
            errors={errors}
          />
          <button type='button' onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type='button' onClick={() => append({ description: '', quantity: 1, rate: 0 })}>
        Add Item
      </button>
    </>
  );
};

