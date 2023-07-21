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
import Spinner from '../ui/spinner';

import { useVideo } from '@/hooks/useVideo';

const VideoForm = () => {
  const { videoForm, handleSubmit, onSubmit, isSubmitting } = useVideo();

  return (
    <div>
      <Form {...videoForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isSubmitting}
                    placeholder="Peixes no mar..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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

export default VideoForm;
