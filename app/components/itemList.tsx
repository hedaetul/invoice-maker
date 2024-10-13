'use client';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { itemType } from '../types/itemTypes';

const ItemList = ({
  fields,
  control,
  remove,
  append,
  formState,
}: {
  fields: itemType[];
  control: any;
  remove: any;
  append: any;
  formState: any;
}) => {
  return (
    <div className='my-12'>
      <h3 className='text-2xl font-bold'>Items</h3>
      {fields.map((item: any, index: number) => (
        <div key={item.id} className='flex space-x-2'>
          <FormField
            control={control}
            name={`items.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder='Description of item/service' {...field} />
                </FormControl>
                <FormMessage>
                  {formState.errors.items?.[index]?.description?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`items.${index}.quantity`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='Quantity' {...field} />
                </FormControl>
                <FormMessage>
                  {formState.errors.items?.[index]?.quantity?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`items.${index}.rate`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='Rate' {...field} />
                </FormControl>
                <FormMessage>
                  {formState.errors.items?.[index]?.rate?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button variant='destructive' onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button
        type='button'
        onClick={() => append({ description: '', quantity: 1, rate: 0 })}
        className='mt-2'
      >
        + Item
      </Button>
    </div>
  );
};

export default ItemList;
