'use client';

import { ReactNode, useEffect, useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

import { Zap } from 'lucide-react';

const FreeCounter = ({ children }: { children: ReactNode }) => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          {children}
          <Button className="w-full" variant="premium">
            Atualizar
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </footer>
  );
};

export default FreeCounter;
