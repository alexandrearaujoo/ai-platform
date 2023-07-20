'use client';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import Spinner from '../ui/spinner';

import { useImage } from '@/hooks/useImage';
import { amountOptions, resolutionOptions } from '@/schemas/imageSchema';

const ImageForm = () => {
  const { imageForm, handleSubmit, onSubmit, isSubmitting, control } =
    useImage();

  return (
    <div>
      <Form {...imageForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isSubmitting}
                    placeholder="Uma imagem de um cavalo na Suiça"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="amount"
            control={control}
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-2">
                <Select
                  disabled={isSubmitting}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue defaultValue={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {amountOptions.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            name="resolution"
            control={control}
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-2">
                <Select
                  disabled={isSubmitting}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue defaultValue={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {resolutionOptions.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="col-span-12 w-full gap-2 lg:col-span-2"
          >
            {isSubmitting ? (
              <>
                <Spinner /> Gerando...
              </>
            ) : (
              'Gerar'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ImageForm;
