'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';

interface LogoFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  errors: FieldErrors;
  type: string;
}

const LogoField: React.FC<LogoFieldProps> = ({
  control,
  type,
  name,
  label,
  placeholder,
  errors,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageLink, setIsImageLink] = useState(false);

  const handleImageChange = (file: File | null, field: any) => {
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      field.onChange(file);
    } else {
      field.onChange(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className=' h-full w-full'>
      {isImageLink ? (
        <Input type='url' />
      ) : (
        <FormField
          control={control}
          name={name}
          render={({ field }: { field: any }) => (
            <FormItem className='w-full'>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <div className='relative border-2 border-dashed h-40 w-40 flex justify-center items-center cursor-pointer'>
                  <Input
                    className='absolute opacity-0 w-full h-full cursor-pointer'
                    type={type}
                    accept='image/jpeg, image/png'
                    placeholder={placeholder}
                    onChange={(e: any) => {
                      const file = e.target.files?.[0] || null;
                      handleImageChange(file, field);
                    }}
                  />
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt='Preview'
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <span className='text-gray-400'>{placeholder}</span>
                  )}
                  {imagePreview && (
                    <button
                      type='button'
                      onClick={handleRemoveImage}
                      className='absolute top-1 right-1 text-red-600 hover:text-red-700'
                    >
                      <RxCross2 className='text-2xl font-extrabold' />
                    </button>
                  )}
                </div>
              </FormControl>
              <FormMessage>
                {errors[name]?.message?.toString() || ''}
              </FormMessage>
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default LogoField;
