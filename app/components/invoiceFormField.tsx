import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldErrors } from 'react-hook-form';

interface invoiceFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  errors: FieldErrors;
  type: string;
}

const InvoiceFormField = ({
  control,
  type,
  name,
  label,
  placeholder,
  errors,
}: invoiceFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input id={name} type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage>{errors[name]?.message?.toString() || ''}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default InvoiceFormField;
