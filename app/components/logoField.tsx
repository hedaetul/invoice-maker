import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldErrors } from 'react-hook-form';

interface logoFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  errors: FieldErrors;
  type: string;
}

const LogoField = ({
  control,
  type,
  name,
  label,
  placeholder,
  errors
}: logoFieldProps) => {
  return (
    <FormField
      control={control}
      name='logo'
      render={({ field }) => (
        <FormItem className='w-full h-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className='w-full h-full'
              name={name}
              placeholder={placeholder}
              type={type}
              accept='image/jpeg, image/png'
              onChange={(e) => {
                const file = e.target.files?.[0];
                field.onChange(file);
              }}
            />
          </FormControl>
          <FormMessage>{errors[name]?.message?.toString() || ''}</FormMessage>
        </FormItem>
      )}
    />
  );
};
export default LogoField;
