'use client';

import Link from 'next/link';

import { Button } from './ui/button';

import { useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>A melhor ferramenta de IA para</h1>
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot.',
                'Geração de Foto.',
                'Geração de Musica.',
                'Geração de Código.',
                'Geração de Video'
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <p className="text-sm font-light text-zinc-400 md:text-xl">
        Crie conteudo usando IA 10x mais rapido.
      </p>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant="premium"
            className="rounded-full p-4 font-semibold md:p-6 md:text-lg"
          >
            Começar Geração de Graça
          </Button>
        </Link>
      </div>
      <p className="text-xs font-normal text-zinc-400 md:text-sm">
        Não é necessario cartao de crédito!
      </p>
    </section>
  );
};

export default LandingHero;
