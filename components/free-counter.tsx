'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

import { modalStore } from '@/stores/modaStore';
import { Zap } from 'lucide-react';

const ProModal = dynamic(() => import('./pro-modal'), { ssr: false });

const FreeCounter = ({ children }: { children: ReactNode }) => {
  const [mounted, setIsMounted] = useState(false);
  const onOpen = modalStore((state) => state.openModal);
  const open = modalStore((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <footer className="px-3">
        <Card className="border-0 bg-white/10">
          <CardContent className="py-6">
            {children}
            <Button className="w-full" variant="premium" onClick={onOpen}>
              Atualizar
              <Zap className="ml-2 h-4 w-4 fill-white" />
            </Button>
          </CardContent>
        </Card>
      </footer>
      {open && <ProModal />}
    </>
  );
};

export default FreeCounter;
