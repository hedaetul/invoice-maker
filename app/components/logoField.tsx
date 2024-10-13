import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';

interface LogoFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  type: string;
}

const LogoField: React.FC<LogoFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  error,
  type,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className='border-2 border-dashed h-32 flex justify-center items-center cursor-pointer relative'>
              <Input
                id={name}
                type={type}
                {...field} // Register the input field with react-hook-form
                className='absolute opacity-0 cursor-pointer'
                placeholder={placeholder}
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    field.onChange(files[0]); // Set the first file
                  } else {
                    field.onChange(null); // Handle the case where no file is selected
                  }
                }}
              />
              <span className='text-gray-400'>{placeholder}</span>
            </div>
          </FormControl>
          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default LogoField;
