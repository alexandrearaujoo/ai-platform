'use client';

import { useState } from 'react';

import { Button } from './ui/button';

import axios from 'axios';
import { Zap } from 'lucide-react';

const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/stripe');
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      onClick={onClick}
      disabled={loading}
    >
      {isPro ? 'Gerenciar assinatura' : 'Assinar'}{' '}
      {!isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
