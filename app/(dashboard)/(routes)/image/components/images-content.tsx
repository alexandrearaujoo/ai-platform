'use client';

import Image from 'next/image';

import Empty from '@/components/empty';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';

import { imageStore } from '@/stores/imageStore';
import { Download } from 'lucide-react';

const ImagesContent = () => {
  const images = imageStore((state) => state.images);
  const isSubmitting = imageStore((state) => state.isLoading);

  return (
    <>
      {isSubmitting && (
        <div className="p-20">
          <Loader />
        </div>
      )}
      {images.length === 0 && !isSubmitting && (
        <Empty label="Nenhuma imagem gerada." />
      )}
      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        {images.map((src) => (
          <li key={src}>
            <Card className="overflow-hidden rounded-lg">
              <figure className="relative aspect-square">
                <Image src={src} fill alt="Imagem Gerada" />
              </figure>
              <CardFooter className="p-2">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.open(src)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImagesContent;
