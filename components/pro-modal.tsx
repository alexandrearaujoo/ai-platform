'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './ui/dialog';

import { tools } from '@/constants/tools';
import { modalStore } from '@/stores/modaStore';
import axios from 'axios';
import { Check, Zap } from 'lucide-react';

const ProModal = () => {
  const [loading, setLoading] = useState(false);
  const open = modalStore((state) => state.isOpen);
  const onClose = modalStore((state) => state.closeModal);

  const onSubscribe = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/stripe');

      window.location.href = data.url;
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <h1 className="flex items-center gap-x-2 py-1 font-bold">
              Atualizar para Genius
              <Badge className="py-1 text-sm uppercase" variant="premium">
                pro
              </Badge>
            </h1>
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            {tools.map(({ bgColor, color, icon: Icon, id, label }) => (
              <Card
                key={id}
                className="flex items-center justify-between border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <figure
                    className="w-fit rounded-md p-2"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Icon className="h-6 w-6" style={{ color }} />
                  </figure>
                  <p className="text-sm font-semibold">{label}</p>
                </div>
                <Check className="h-5 w-5 text-primary" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            size="lg"
            variant="premium"
            className="w-full"
            onClick={onSubscribe}
          >
            Atualizar <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </DialogFooter>
        <p className="w-full animate-pulse text-center font-bold text-red-500">
          Utilize dados fictícios para testar!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
