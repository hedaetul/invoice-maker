'use client'; 

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Control, FormState } from 'react-hook-form';
import { dataType } from '../types/dataTypes';

interface AdditionalDetailsProps {
  control: Control<any>;
  formState: FormState<dataType>;
}

const AdditionalDetails = ({ control, formState }: AdditionalDetailsProps) => {
  return (
    <>
      <FormField
        control={control}
        name='notes'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notes</FormLabel>
            <FormControl>
              <Textarea placeholder='Notes' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.notes?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='subtotal'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Subtotal</FormLabel>
            <FormControl>
              <Input type='number' placeholder='Subtotal' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.subtotal?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='discount'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Discount</FormLabel>
            <FormControl>
              <Input type='number' placeholder='Discount'  {...field} />
            </FormControl>
            <FormMessage>{formState.errors.discount?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='shipping'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Shipping</FormLabel>
            <FormControl>
              <Input type='number' placeholder='Shipping charge' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.shipping?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='termsAndConditions'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Terms and Conditions</FormLabel>
            <FormControl>
              <Textarea placeholder='Terms and Conditions' {...field} />
            </FormControl>
            <FormMessage>
              {formState.errors.termsAndConditions?.message}
            </FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='amountPaid'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount Paid</FormLabel>
            <FormControl>
              <Input type='number' placeholder='Amount Paid' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.amountPaid?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='balanceDue'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Balance Due</FormLabel>
            <FormControl>
              <Input type='number' placeholder='Balance Due' {...field} />
            </FormControl>
            <FormMessage>{formState.errors.balanceDue?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='currency'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Currency</FormLabel>
            <FormControl>
              <Select {...field} value={field.value}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={field.value ? field.value : 'Select Currency'}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='USD'>USD</SelectItem>
                  <SelectItem value='EUR'>EUR</SelectItem>
                  <SelectItem value='GBP'>GBP</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage>{formState.errors.currency?.message}</FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default AdditionalDetails;
